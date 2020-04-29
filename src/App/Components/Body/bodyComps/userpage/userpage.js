import React, { useEffect } from 'react';
import { fetchRecipes } from '../../../../../Utils/store/Actions/recipeActions';
import { connect } from 'react-redux';

function UserPage(props) {
  useEffect(() => {
    props.fetchRecipes();
  }, []);
  console.log('recipes', props.recipes);
  return (
    <div>
      <div>
        {props.recipes
          ? props.recipes.map((item) => <p> {item.title} </p>)
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
