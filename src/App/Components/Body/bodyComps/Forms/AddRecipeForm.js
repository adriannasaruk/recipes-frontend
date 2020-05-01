import React, { useState } from 'react';
import '../home.css';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../../../Utils/axiosWithAuth';

export default function AddRecipe(props) {
  const user_id = localStorage.getItem('user_id');
  const [state, setState] = useState({
    title: '',
    source: '',
    user_id: user_id,
    ingredients: '',
    instructions: '',
    category: '',
  });

  const { push } = useHistory();

  const subRecipe = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('https://secretfamilyrecipes1.herokuapp.com/api/recipes', state)
      .then((res) => {
        console.log({ res });
        push('/userpage');
        window.location.reload();
      })
      .catch((err) => console.error({ err }));
  };

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='signupForm'>
      <form onSubmit={subRecipe} className='addRecipe'>
        <h3>Add New Recipes Here</h3>
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
        <label htmlFor='category'>
          <input
            type='text'
            name='category'
            placeholder='Category:'
            value={state.category}
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
    </div>
  );
}
