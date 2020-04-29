const initialState = {
  isFetching: false,
  error: '',
  results: {},
};

export const publicReducer = (state = initialState, action) => {
  console.log('Inside Public Reducer', state);
  switch (action.type) {
    case 'Public_Fetch_Start':
      return {
        ...state,
        isFetching: true,
      };

    case 'Public_Fetch_Success':
      return {
        ...state,
        isFetching: false,
        results: action.payload,
      };
    case 'Public_Fetch_Failure':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }
};
