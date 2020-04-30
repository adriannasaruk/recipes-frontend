import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../../../Utils/store/Actions/recipeActions';
import { connect } from 'react-redux';
import UserCard from './userCard';
import Nav from '../../../Nav/Nav';
import { useHistory } from 'react-router-dom';

function UserPage(props) {
  const { push } = useHistory();
  const [state, setState] = useState(props.recipes);
  const [dependency, setDependency] = useState([]);

  const addRecipeForm = (e) => {
    push('/addrecipe');
  };

  const reload = () => {
    window.location.reload();
  };

  useEffect(() => {
    // reload();
    props.fetchRecipes();
  }, [dependency]);

  console.log('recipes', props.recipes);

  return (
    <>
      <Nav />
      <div className='userpage'>
        <div className='userpage-info'>
          <button onClick={addRecipeForm} className='add-recipe btn'>
            Add a Recipe
          </button>
        </div>
        <div>
          {props.recipes
            ? props.recipes.map((item) => (
                <UserCard key={item.id} recipe={item} />
              ))
            : null}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    recipes: state.publicReducer.results,
  };
};
export default connect(mapStateToProps, { fetchRecipes })(UserPage);
