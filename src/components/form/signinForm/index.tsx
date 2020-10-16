import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import { SigninFormType, LoginSchema } from './utils';
import { Button } from 'primereact/button';
import { Link, useHistory } from 'react-router-dom';
import ROUTES from '../../../constants/routes';
import { API } from '../../../constants/api';
import { Token } from '../../../models/token';
import UserContext from '../../../context/userContext';

type SigninFormProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const SigninForm: React.FC<SigninFormProps> = ({
  setIsLogin,
}: SigninFormProps) => {
  const user = useContext(UserContext);
  const history = useHistory();

  const [initialValues, setInitialValues] = useState<SigninFormType>({
    email: '',
    password: '',
  });

  const handleSubmit = async (values: SigninFormType, actions: any) => {
    const email = values.email;
    const password = values.password;

    const body = new URLSearchParams();
    body.append('email', email);
    body.append('password', password);

    const signin = await fetch(API.login, {
      method: 'POST',
      body: body,
    });

    const parsedSignin: Token = await signin.json();

    localStorage.setItem('token', JSON.stringify(parsedSignin));
    user.update();
    //TODO: Push user to the homepage
    history.push(ROUTES.home);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email" className="danger">
              Email
            </label>
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
              type="submit"
              label="Log in"
              className="p-button-raised p-button-success"
            />
            <Link to="#" onClick={() => setIsLogin(false)}>
              Don't have an account? Register here!
            </Link>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SigninForm;
