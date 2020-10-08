export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

export const loginFailure = (errorMsg) => {
  return {
    type: "LOGIN_FAILURE",
    payload: errorMsg,
  };
};

export const userLogout = () => {
  return {
    type: "USER_LOGOUT",
  };
};
