import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/home';
<<<<<<< HEAD
import Detail from './views/detail'
import Contact from './views/contact'
=======
import Auth from './views/auth';

import ROUTES from './constants/routes';
import UserContext, { UserContextType } from './context/userContext';
import { API } from './constants/api';
import { Token } from './models/token';
import { User } from './models';
>>>>>>> master

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ProtectedRoute from './HOC/protectedRoute';

function App() {
  const updateUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken: Token = JSON.parse(token);

      const response = await fetch(API.getProfile, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${parsedToken.accessToken}`,
        },
      });

      const parsedUser: User = await response.json();
      setUser({
        data: parsedUser,
        update: updateUser,
        ready: true,
      });
    } else {
      setUser({
        data: undefined,
        update: updateUser,
        ready: true,
      });
    }
  };

  const [user, setUser] = useState<UserContextType>({
    data: undefined,
    update: updateUser,
    ready: false,
  });

  useEffect(() => {
    updateUser();
  }, []);

  const isLogin = user.data ? true : false;

<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
=======
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <ProtectedRoute
          path={ROUTES.home}
          Component={Home}
          auth={isLogin}
          ready={user.ready}
        />
        <Route exact path={ROUTES.auth} component={Auth} />
      </UserContext.Provider>
>>>>>>> master
    </BrowserRouter>
  );
}

export default App;
