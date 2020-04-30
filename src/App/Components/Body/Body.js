import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.css';
import Signup from './bodyComps/Forms/SingupForm';
import LoginForm from './bodyComps/Forms/LoginForm';
import Home from './bodyComps/Home';
import PubRecipes from './bodyComps/Public Recipes Page/publicRecipes';
import PrivateRoute from '../../../Utils/PrivateRoute';
import UserPage from './bodyComps/userpage/userpage';
import AddRecipe from './bodyComps/Forms/AddRecipeForm';
import Nav from '../Nav/Nav';

export default function Body(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <Home />
        </Route>
        <Route exact path='/signup'>
          <Nav />
          <Signup />
        </Route>
        <Route exact path='/login'>
          <Nav />
          <LoginForm />
        </Route>
        <Route exact path='/recipes'>
          <Nav />
          <PubRecipes />
        </Route>
        {/* <Nav /> */}
        <PrivateRoute exact path='/userpage' component={UserPage} />
        <PrivateRoute exact path='/addrecipe' component={AddRecipe} />
      </Switch>
    </div>
  );
}
