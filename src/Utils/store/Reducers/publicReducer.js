const initialState = {
  isFetching: false,
  error: '',
  results: [],
};

export const publicReducer = (state = initialState, action) => {
  console.log('actions payload', action.payload);
  // console.log('state', state);
  switch (action.type) {
    case 'User_Recipe_Fetch_Start':
      return {
        ...state,
        isFetching: true,
      };

    case 'User_Recipe_Fetch_Success':
      const recipes = action.payload;
      return {
        ...state,
        isFetching: false,
        results: recipes,
      };
    case 'User_Recipe_Fetch_Failure':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
