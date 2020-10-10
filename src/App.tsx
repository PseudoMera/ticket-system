import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/home';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
