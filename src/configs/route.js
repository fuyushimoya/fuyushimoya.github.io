import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Routes components.
import Main from '../components/main'
import Home from '../components/home'

// Router setting.
export default (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);