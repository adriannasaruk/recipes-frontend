import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.css';
import Signup from './bodyComps/Forms/SingupForm';
import LoginForm from './bodyComps/Forms/LoginForm';
import Home from './bodyComps/Home';

export default function Body(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}
