//---import the dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//---import the components
import Login from '../pages/login';
import Layout from '../layout/';
//import { isAuthenticated } from '../services/auth';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//       )
//     }
//   />
// );

const InitialRoutes = () => (
  <BrowserRouter>
    <Switch>
      {/* <PrivateRoute path="/app*" exact component={Layout} /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/app*" exact component={Layout} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default InitialRoutes;
