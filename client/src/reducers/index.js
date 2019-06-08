const initialState = {
  isLogged: null,
  loading: false,
  loginError: null,
  registerValid: [],
  isRegistered: null,
  emailIsBusy: null
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
        loginError: false,
        loading: true
      }
    case 'SUCCESS_LOGIN_POST' :
      return {
        ...state,
        isLogged: true,
        loginError: false,
        loading: false
      }
    case 'FAILURE_LOGIN_POST' :
      return {
        ...state,
        loginError: true,
        loading: false
      }

    case 'CHECK_VALID' :
      return {
        ...state,
        registerValid: action.payload
      }


    case 'FETCH_REGISTER_FAILURE' :
      return {
        ...state,
        emailIsBusy: true,
        loading: false
      }

    case 'FETCH_REGISTER_REQUEST' :
      return {
        ...state,
        loading: true
      }

    case 'FETCH_REGISTER_SUCCESS' :
      return {
        ...state,
        emailIsBusy: false,
        isRegistered: true,
        loading: false
      }

    default:
      return state

  }
}

export default reducer
