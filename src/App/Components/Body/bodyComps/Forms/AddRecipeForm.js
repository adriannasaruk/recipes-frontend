import React, { useState } from 'react';

export default function AddRecipe(props) {
  const [state, setState] = useState({
    title: '',
    source: '',
    user_id: '',
    id: '',
    ingredients: '',
    instructions: '',
  });

  const user_id = localStorage.getItem('user_id');

  const subRecipe = (e) => {
    e.preventDefault();
    const newState = {
      ...state,
      user_id: user_id,
    };
  };

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={subRecipe} className='addRecipe'>
      <label htmlFor='title'>
        <input
          type='text'
          name='title'
          placeholder='Title: '
          value={state.title}
          onChange={change}
        />
      </label>
      <label htmlFor='source'>
        <input
          type='text'
          name='source'
          placeholder='Author: '
          value={state.source}
          onChange={change}
        />
      </label>
      <label htmlFor='ingredients'>
        <textarea
          type='text'
          name='ingredients'
          placeholder='Ingredients: '
          value={state.ingredients}
          onChange={change}
        />
      </label>
      <label htmlFor='instructions'>
        <textarea
          type='text'
          name='instructions'
          placeholder='Instructions: '
          value={state.instructions}
          onChange={change}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}