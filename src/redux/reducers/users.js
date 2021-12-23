import jwt from "jsonwebtoken";

export const isValidToken = (token) => {
  let decoded = jwt.decode(token);
  return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};

const initState = {
  currentUser: localStorage.getItem("USER-TOKEN")
    ? isValidToken(localStorage.getItem("USER-TOKEN"))
    : null,
  token: localStorage.getItem("USER-TOKEN")
    ? localStorage.getItem("USER-TOKEN")
    : null,
  isAuthenticated: false,
};

export const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    //sign up
    case 'SIGN_UP_REQUEST':
    case 'SIGN_UP_SUCCESS':
    case 'SIGN_UP_FAILURE':
    //sign in
    // eslint-disable-next-line no-fallthrough
    case 'SIGN_IN_REQUEST':
    case 'SIGN_IN_SUCCESS':
      
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      }
    case 'SIGN_IN_FAILURE':
    //sign out
    // eslint-disable-next-line no-fallthrough
    case 'SIGN_OUT_REQUEST':
      return {
        ...state,
        isAuthenticated: false,
      }
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      }
    case 'SIGN_OUT_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
        token: "",
      }
    default:
      return {...state}
  }
}

export default authenticationReducer;

