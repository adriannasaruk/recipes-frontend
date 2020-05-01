import React from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../../../../Utils/axiosWithAuth';

function UserCard(props) {
  console.log(props.recipe);
  const deleteRecipe = (e) => {
    axiosWithAuth()
      .delete(
        `https://secretfamilyrecipes1.herokuapp.com/api/recipes/${props.recipe.id}`
      )
      .then((res) => {
        console.log({ res });
        window.location.reload();
      })
      .catch((err) => console.error({ err }));
  };

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
        <button onClick={deleteRecipe} className='delete btn'>
          Delete
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    random: state.publicRecipe,
  };
};

export default connect(mapStateToProps, {})(UserCard);
