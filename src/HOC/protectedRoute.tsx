import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ROUTES from '../constants/routes';

type ProtectedRouteProps = {
  Component: React.FC;
  path: string;
  auth: boolean;
  ready: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  Component,
  path,
  auth,
  ready,
}: ProtectedRouteProps) => {

  return (
    <React.Fragment>
      {!ready ? null : auth ? (
        <>
          <Route path={path} component={Component} exact />
        </>
      ) : (
        <Redirect to={ROUTES.auth} />
      )}
    </React.Fragment>
  );
};

export default ProtectedRoute;
