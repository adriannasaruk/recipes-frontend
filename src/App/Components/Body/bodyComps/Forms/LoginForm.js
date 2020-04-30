import React, { useState } from 'react';
import './singup.css';
import { axiosWithAuth } from '../../../../../Utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginForm = (props) => {
  const [box, setBox] = useState({
    username: '',
    password: '',
  });

  const { push } = useHistory();
  const handleChanges = (event) => {
    setBox({ ...box, [event.target.name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('https://secretfamilyrecipes1.herokuapp.com/api/auth/login', box)
      .then((res) => {
        console.log({ res });
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('user_id', JSON.stringify(res.data.id));
        push('/userpage');
      })
      .catch((err) => console.error({ err }));
  };

  return (
    <div className='signupForm'>
      <form onSubmit={submitForm}>
        <h3>Login!</h3>
        <label htmlFor='username' className='label email-label'>
          <input
            id='username'
            type='text'
            name='username'
            onChange={handleChanges}
            placeholder='Username'
            value={box.email}
          />
        </label>
        <label htmlFor='password' className='label pass-label'>
          <input
            id='password'
            type='password'
            name='password'
            onChange={handleChanges}
            placeholder='Password'
            value={box.password}
          />
        </label>
        <button type='submit' className='signup-btn'>
          Login
        </button>
      </form>
    </div>
  );
};

const map = (state) => {
  return {};
};

export default connect(map, {})(LoginForm);
