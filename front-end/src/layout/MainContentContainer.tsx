import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserRegisterComponent from '../register/UserRegisterComponent';

export default function MainContentContainer() {
  return (
    <div>
      <Switch>
        <Route path="/register">
          <UserRegisterComponent />
        </Route>
      </Switch>
    </div>
  );
}
