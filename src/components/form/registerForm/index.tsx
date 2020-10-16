import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import { RegisterFormType, RegisterSchema } from './utils';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';
import UserContext from '../../../context/userContext';
import { API } from '../../../constants/api';

type RegisterFormProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

/*
  email: prueba@prueba.com
  password: 123456789aa
*/

const RegisterForm: React.FC<RegisterFormProps> = ({
  setIsLogin,
}: RegisterFormProps) => {
  const user = useContext(UserContext);

  const [initialValues, setInitialValues] = useState<RegisterFormType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = async (values: RegisterFormType, actions: any) => {
    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const password = values.password;

    const body = new URLSearchParams();
    body.append('firstName', firstName);
    body.append('lastName', lastName);
    body.append('email', email);
    body.append('password', password);
    body.append('isAdmin', 'false');

    const createUser = await fetch(API.register, {
      method: 'POST',
      body: body,
    });

    const parsedUser = await createUser.json();
    setIsLogin(true);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field
              name="firstName"
              placeholder="First name"
              className="mg-bt"
            />
            {errors.firstName && touched.firstName ? (
              <p className="p-invalid">{errors.firstName}</p>
            ) : null}

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" placeholder="Last name" className="mg-bt" />
            {errors.lastName && touched.lastName ? (
              <p className="p-invalid">{errors.lastName}</p>
            ) : null}

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Email" className="mg-bt" />
            {errors.email && touched.email ? (
              <p className="p-invalid">{errors.email}</p>
            ) : null}

            <label htmlFor="password">Password</label>
            <Field
              name="password"
              placeholder="Password"
              className="mg-bt"
              type="password"
            />
            {errors.password && touched.password ? (
              <p className="p-invalid">{errors.password}</p>
            ) : null}

            <Button
              label="Register"
              type="submit"
              className="p-button-raised p-button-success"
            />
            <Link to="#" onClick={() => setIsLogin(true)}>
              Already have an account? Log in here!
            </Link>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RegisterForm;
