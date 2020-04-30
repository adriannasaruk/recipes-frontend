import { axiosWithAuth } from '../../axiosWithAuth';

const user_id = localStorage.getItem('user_id');

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'User_Recipe_Fetch_Start' });
    axiosWithAuth()
      .get(`https://secretfamilyrecipes1.herokuapp.com/api/recipes/${user_id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'User_Recipe_Fetch_Success', payload: res.data });
      })
      .catch((err) => console.error({ err }));
  };
};
