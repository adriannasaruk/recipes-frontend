import React, { useState } from 'react';
import './singup.css';

const LoginForm = (props) => {
  const [box, setBox] = useState({
    Email: '',
    password: '',
  });

  const handleChanges = (event) => {
    setBox({ ...box, [event.target.name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    // props.addNewNote(box);
    setBox({ email: '', password: '' });
  };

  return (
    <div className='signupForm'>
      <form onSubmit={submitForm}>
        <label htmlFor='email' className='label email-label'></label>
        <input
          id='email'
          type='text'
          name='email'
          onChange={handleChanges}
          placeholder='Email'
          value={box.email}
        />

        <label htmlFor='password' className='label pass-label'></label>
        <input
          id='password'
          type='text'
          name='password'
          onChange={handleChanges}
          placeholder='Password'
          value={box.password}
        />
        <button type='submit' className='signup-btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
