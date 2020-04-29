import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

function PubRecipes(props) {
  const [recipes, setRecipes] = useState({
    recipes: {},
  });
  useEffect(() => {
    axios
      .get('https://secretfamilyrecipes1.herokuapp.com/api/public')
      .then((res) => {
        setRecipes({
          ...recipes,
          recipes: res.data.recipes,
        });
      });
  }, []);
  return (
    <div className='public-wrapper'>
      {recipes.data.recipes
        ? recipes.data.recipes.map((recipe) => console.log(recipe.title))
        : null}
    </div>
  );
}

const map = (state) => {
  return {};
};

export default connect(map, {})(PubRecipes);
