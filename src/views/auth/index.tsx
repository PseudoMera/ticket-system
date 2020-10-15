import './style.scss';
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthCard from '../../components/card/AuthCard';
import SigninForm from '../../components/form/signinForm';
import RegisterForm from '../../components/form/registerForm';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = ({}: AuthPageProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <main id="signin-wrapper">
      <Container fluid>
        <AuthCard
          content={isLogin ? <SigninForm setIsLogin={setIsLogin}/> : <RegisterForm setIsLogin={setIsLogin}/>}
          title="Welcome!"
        />
      </Container>
    </main>
  );
};

export default AuthPage;
