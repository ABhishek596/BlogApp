const initialState = {
    posts: [],
  };
  
  // Reducer to handle actions
  function postReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      default:
        return state;
    }
  }



  export default postReducer;