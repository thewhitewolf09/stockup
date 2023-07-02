// authActions.js

export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Perform login logic, e.g., make API request to authenticate user
      localStorage.setItem('jwtToken', userData.token);
      // Dispatch the LOGIN_SUCCESS action with the user data received from the server
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: userData,
      });
    } catch (error) {
      // Dispatch the LOGIN_FAILURE action with the error message
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.response.data.message,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      // Perform logout logic, e.g., clear local storage or make API request to invalidate the token
      localStorage.removeItem('jwtToken');

      // Dispatch the LOGOUT_SUCCESS action
      dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    } catch (error) {
      // Dispatch the LOGOUT_FAILURE action with the error message
      dispatch({
        type: 'LOGOUT_FAILURE',
        payload: error.response.data.message,
      });
    }
  };
};
