export const signUp = (userData) => {
    return {
      type: 'SIGN_UP',
      payload: userData,
    };
  };

  export const token = (data) => {
    return {
      type: 'AUTH_TOKEN',
      payload: data,
    };
  };
  