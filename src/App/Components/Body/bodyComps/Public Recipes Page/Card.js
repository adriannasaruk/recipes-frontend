import React from 'react';

export default function Card({ recipe }) {
  return (
    <div className='card-wrap'>
      <h3>{recipe.title}</h3>
      <p> {recipe.source} </p>
      <div className='category-wrap'>
        <h5>Category: </h5>
        <p>{recipe.category}</p>
      </div>
      <div className='ingredients-wrap'>
        <h5>Ingredients: </h5>
        <p>{recipe.ingredients}</p>
      </div>
      <div className='instructions-wrap'>
        <h5>Instructions: </h5>
        <p> {recipe.instructions} </p>
      </div>
    </div>
  );
}
