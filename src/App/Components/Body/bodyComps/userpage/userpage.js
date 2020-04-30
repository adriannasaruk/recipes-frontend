import React, { useEffect } from 'react';
import { fetchRecipes } from '../../../../../Utils/store/Actions/recipeActions';
import { connect } from 'react-redux';
import UserCard from './userCard';

function UserPage(props) {
  useEffect(() => {
    props.fetchRecipes();
  }, []);
  console.log('recipes', props.recipes);
  return (
    <div className='userpage'>
      <div className='userpage-info'>
        <button className='add-recipe btn'>Add a Recipe</button>
      </div>
      <div>
        {props.recipes
          ? props.recipes.map((item) => (
              <UserCard key={item.id} recipe={item} />
            ))
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    recipes: state.publicReducer.results,
  };
};
export default connect(mapStateToProps, { fetchRecipes })(UserPage);
