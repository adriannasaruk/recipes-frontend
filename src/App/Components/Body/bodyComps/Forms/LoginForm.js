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
    props.addNewNote(box);
    setBox({ email: '', password: '' });
  };

  return (
    <div className='signupForm'>
    <form onSubmit={submitForm}>
      <label htmlFor='Email' className='label email-label'></label>
      <input
        id='Email'
        type='text'
        name='Email'
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
      <button type='submit'>Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
