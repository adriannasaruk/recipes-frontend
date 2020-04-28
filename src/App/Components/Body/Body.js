import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.css';
import Signup from './bodyComps/Forms/SingupForm';
import LoginForm from './bodyComps/Forms/LoginForm';
import Home from './bodyComps/Home';

export default function Body(props) {
  return (
    <div>
      <Signup/>
    </div>
  );
}
