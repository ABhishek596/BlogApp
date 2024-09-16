const initialState = {
    user: null,
    isAuthenticated: false,
    token:null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
        case 'AUTH_TOKEN':
          return {
            ...state,
            token: action.payload,
            isAuthenticated: true,
          };
      default:
        return state;
    }
  };
  
  export default authReducer;
  