import React from 'react';

function UserCard(props) {
  return (
    <div className='usercard-wrap'>
      <div className='top-card'>
        <h3>{props.recipe.title}</h3>
        <h6> {props.recipe.source} </h6>
      </div>
      <div className='ing-wrap'>
        <h4>Ingredients: </h4>
        <p> {props.recipe.ingredients} </p>
      </div>
      <div className='inst-wrap'>
        <h4>Instructions: </h4>
        <p> {props.recipe.instructions} </p>
        <button className='delete btn'>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
