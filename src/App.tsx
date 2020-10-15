import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/home';
import Auth from './views/auth';

import ROUTES from './constants/routes';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.home} component={Home}/>
        <Route exact path={ROUTES.auth} component={Auth}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
