//---import the dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//---import the components
import Home from '../pages/home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/app" exact component={Home} />
    </Switch>
  );
}
