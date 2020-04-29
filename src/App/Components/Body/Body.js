import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.css';
import Signup from './bodyComps/Forms/SingupForm';
import LoginForm from './bodyComps/Forms/LoginForm';
import Home from './bodyComps/Home';
import PubRecipes from './bodyComps/Public Recipes Page/publicRecipes';
import PrivateRoute from '../../../Utils/PrivateRoute';
import UserPage from './bodyComps/userpage/userpage';

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
        <Route path='/recipes'>
          <PubRecipes />
        </Route>
        <PrivateRoute exact path='/userpage' component={UserPage} />
      </Switch>
    </div>
  );
}
