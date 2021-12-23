import axios from "axios";
const baseUrl = 'http://localhost:4000/api/v1/users'

// sign up
const signUpRequest = () => {
  return {
    type: 'SIGN_UP_REQUEST',
  }
}

const signUpSuccess = (user) => {
  return {
    type: 'SIGN_UP_SUCCESS',
    payload: {
      user,
    }
  }
}

const signUpFailure = (error) => {
  return {
    type: 'SIGN_UP_FAILURE',
    payload: error,
  };
};

export const signUp = (user) => {
  return function (dispatch) {
    dispatch(signUpRequest());
    axios({
      method: 'post',
      url: '/signUp',
      baseURL: baseUrl,
      data: user,
    })
      .then((res) => {
        const {data} = res.data
        dispatch(signUpSuccess(data))
      })
      .catch((err) => {
        console.log(err)
        dispatch(signUpFailure(err))
      })
  }
}

// login

const signInRequest = () => {
  return {
    type: 'SIGN_IN_REQUEST',
  }
}

const signInSuccess = (token) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: {
      token,
    }
  }
}

const signInFailure = (error) => {
  return {
    type: 'SIGN_IN_FAILURE',
    payload: error,
  };
};

export const signIn = (payload) => {
  return function (dispatch) {
    dispatch(signInRequest());
    axios({
      method: 'post',
      url: '/signIn',
      baseURL: baseUrl,
      data: payload,
    })
      .then((res) => {
        const { token } = res.data
        localStorage.setItem("USER-TOKEN", token)
        dispatch(signInSuccess(token))
      })
      .catch((err) => {
        console.log(err)
        dispatch(signInFailure(err))
      })
  }
}

// sign out

const signOutRequest = () => {
  return {
    type: 'SIGN_OUT_REQUEST',
  }
}

const signOutSuccess = (token) => {
  return {
    type: 'SIGN_OUT_SUCCESS',
  }
}

const signOutFailure = (error) => {
  return {
    type: 'SIGN_OUT_FAILURE',
    payload: error,
  };
};

export const signOut = () => {
  return function (dispatch) {
    dispatch(signOutRequest())
    localStorage.clear()
    if (localStorage.getItem("USER_TOKEN")){
      dispatch(signOutFailure())
    } else {
      dispatch(signOutSuccess())
    }
  }
}


