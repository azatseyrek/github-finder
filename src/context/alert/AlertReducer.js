const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,

        msg: action.payload.msg,
        type: action.payload.type,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        msg: null,
        type: null,
      };

    default:
      return state;
  }
};

export default alertReducer;
