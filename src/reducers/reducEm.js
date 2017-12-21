let reducEm = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_REPOS":
      return {...state, posts: action.payload};
    default:
      return state;
  }
};

export default reducEm
