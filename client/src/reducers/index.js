const initialState = {
  isLogged: null,
  loginError: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTH_REQUEST' :
      return {
        ...state,
        isLogged: false
      }
    case 'FETCH_AUTH_SUCCESS' :
      return {
        ...state,
        isLogged: true
      }
    case 'FETCH_AUTH_ERROR' :
      return {
        ...state,
        isLogged: false
      }

    case 'SEND_LOGIN_POST' :
      return {
        ...state,
        loginError: false
      }
    case 'SUCCESS_LOGIN_POST' :
      return {
        isLogged: true,
        loginError: false
      }
    case 'FAILURE_LOGIN_POST' :
      return {
        ...state,
        loginError: true
      }


    default:
      return state

  }
}

export default reducer
