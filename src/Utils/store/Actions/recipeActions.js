import { axiosWithAuth } from '../../axiosWithAuth';

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'User_Recipe_Fetch_Start' });
    axiosWithAuth()
      .get('https://secretfamilyrecipes1.herokuapp.com/api/recipes')
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'User_Recipe_Fetch_Success', payload: res.data });
      }).catch(err => console.error({err}));
  };
};
