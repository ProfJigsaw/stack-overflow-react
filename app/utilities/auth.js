/**
 * Function to get user token
 * from the local storage of the browser
 * @returns {string} output
 */
export const getToken = () => {
  return localStorage.getItem('stack-jwt');
};

/**
 * Function to get user id
 * @returns {integer} id
 */
export const getUserId = () => {
  return localStorage.getItem('stack-userid');
};

/**
 * Function to check the
 * signin state of a user
 * @returns {boolean} login state
 */
export const isLoggedIn = () => {
  let loginState;
  const token = getToken();
  if (token) {
    loginState = true;
  } else {
    loginState = false;
  }
  return loginState;
};
