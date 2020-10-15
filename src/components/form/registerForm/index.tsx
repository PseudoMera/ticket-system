import React, { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import { RegisterFormType } from './utils';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

type RegisterFormProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterValues: React.FC = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log(values);
  }, [values]);

  return null;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  setIsLogin
}: RegisterFormProps) => {
  const [initialValues, setInitialValues] = useState<RegisterFormType>({
    email: '',
    password: '',
  });

  const handleSubmit = (values: any, actions: any) => {
    console.log('VALUES: ', values);
    console.log('ACTIONS: ', actions);
  };

  return (
    <React.Fragment>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field name="firstName" placeholder="First name" className="mg-bt" />
          <label htmlFor="lastName">Last name</label>
          <Field name="lastName" placeholder="Last name" className="mg-bt" />
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="Email" className="mg-bt" />
          <label htmlFor="password">Password</label>
          <Field name="password" placeholder="Password" className="mg-bt" />
          <Button label="Register" type="submit" className="p-button-raised p-button-success" />
          <Link to="#" onClick={() => setIsLogin(true)}>Already have an account? Log in here!</Link>
          <RegisterValues />
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default RegisterForm;
