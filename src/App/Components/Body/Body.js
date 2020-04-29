import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.css';
import Signup from './bodyComps/Forms/SingupForm';
import LoginForm from './bodyComps/Forms/LoginForm';
import Home from './bodyComps/Home';
import PubRecipes from './bodyComps/Public Recipes Page/publicRecipes';

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
        <Route patch='/recipes'>
          <PubRecipes />
        </Route>
      </Switch>
    </div>
  );
}
