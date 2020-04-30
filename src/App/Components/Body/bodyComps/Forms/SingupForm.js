import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../../../../../Utils/axiosWithAuth';

import './singup.css';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("What's your name?")
    .min(4, 'Name must be at least 4 characters'),
  password: yup
    .string()
    .required('Enter a password to continue.')
    .min(6, 'Your password is too short.'),
});

const Signup = (props) => {
  const [disable, setDisable] = useState(false);
  const [information, setInformation] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    formSchema.isValid(information).then((pressed) => {
      setDisable(!pressed);
    });
  }, [information]);

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((pressed) => {
        setError({
          ...error,
          [event.target.name]: '',
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [event.target.name]: err.errors[0],
        });
      });
  };
  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...information,
      [event.target.name]: event.target.value,
    };
    setInformation(newFormData);
    validateChange(event);
  };
  const submitForm = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post(
        'https://secretfamilyrecipes1.herokuapp.com/api/auth/register',
        information
      )
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className='signupForm'>
      <form onSubmit={submitForm}>
        <h3>Signup!</h3>
        <label htmlFor='username' className='label name-label'>
          <input
            id='username'
            type='text'
            name='username'
            onChange={inputChange}
            placeholder='Name'
            className='name'
            value={information.username}
            required
          />
          {error.username.length > 0 ? (
            <p className='error'>{error.username}</p>
          ) : null}{' '}
        </label>
        <label htmlFor='password' className='label pass-label'>
          <input
            id='password'
            type='password'
            name='password'
            onChange={inputChange}
            placeholder='Password'
            value={information.password}
            className='password'
            required
          />
          {error.password.length > 0 ? (
            <p className='error'>{error.password}</p>
          ) : null}{' '}
        </label>
        <label htmlFor='terms' className='tos-label'>
          <input type='checkbox' name='terms' className='tos' />
          <p className='tos-text'>Agree to TOS.</p>
        </label>
        <button className='signup-btn' disabled={disable} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
