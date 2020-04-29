import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import axios from 'axios';
import './public.css';

function PubRecipes(props) {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    axios
      .get('https://secretfamilyrecipes1.herokuapp.com/api/public')
      .then((res) => {
        console.log({ res });
        setRecipes(res.data.recipes);
      })
      .catch((err) => console.error({ err }));
  }, []);
  return (
    <div className='public-wrapper'>
      {console.log({ recipes })}
      {recipes
        ? recipes.map((item) => <Card key={item.id} recipe={item} />)
        : null}
    </div>
  );
}

const map = (state) => {
  return {};
};

export default connect(map, {})(PubRecipes);
