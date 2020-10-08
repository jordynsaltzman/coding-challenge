const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: null,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
