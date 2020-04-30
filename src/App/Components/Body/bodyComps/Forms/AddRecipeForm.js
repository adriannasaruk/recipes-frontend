import React, { useState } from 'react';

export default function AddRecipe(props) {
  return (
    <form>
      <label htmlFor='title'>
        <input type='text' name='title' placeholder='Title: ' />
      </label>
      <label htmlFor='source'>
        <input type='text' name='source' placeholder='Author: ' />
      </label>
      <label htmlFor='ingredients'>
        <textarea type='text' name='ingredients' placeholder='Ingredients: ' />
      </label>
      <label htmlFor='instructions'>
        <textarea
          type='text'
          name='instructions'
          placeholder='Instructions: '
        />
      </label>
    </form>
  );
}
