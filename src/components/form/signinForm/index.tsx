import React, { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import { SigninFormType } from './utils';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

type SigninFormProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const SigninValues: React.FC = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log(values);
  }, [values]);

  return null;
};

const SigninForm: React.FC<SigninFormProps> = ({
  setIsLogin
}: SigninFormProps) => {
  const [initialValues, setInitialValues] = useState<SigninFormType>({
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
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="Email" className="mg-bt" />
          <label htmlFor="password">Password</label>
          <Field name="password" placeholder="Password" className="mg-bt" />
          <Button type="submit" label="Log in" className="p-button-raised p-button-success" />
          <Link to="#" onClick={() => setIsLogin(false)}>
            Don't have an account? Register here!
          </Link>
          <SigninValues />
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default SigninForm;
