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
    setBox({ email: '', password: '',});
  };

  return (
<<<<<<< HEAD
    <div className='login-form signupForm'>
      <form onSubmit={submitForm}>
        <h3>Login!</h3>
        <label htmlFor='Email' className='label email-label'>
          <input
            id='Email'
            type='text'
            name='Email'
            onChange={handleChanges}
            placeholder='Email'
            value={box.email}
          />
        </label>
        <label htmlFor='password' className='label pass-label'>
          <input
            id='password'
            type='text'
            name='password'
            onChange={handleChanges}
            placeholder='Password'
            value={box.password}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
=======
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
      <button type='submit'className='signup-btn'>Login</button>
    </form>
>>>>>>> ee71c371e9a96dde59bc4004d776b70306f93f12
    </div>
  );
};

export default LoginForm;
