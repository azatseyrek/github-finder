const githubReducer = (state, action) => {
  switch (action.type) {

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: false,
      };
    // added
    case 'GET_SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
