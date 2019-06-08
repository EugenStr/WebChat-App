const authRequest = () => {
  return {
    type: 'FETCH_AUTH_REQUEST'
  }
}

const authSuccess = () => {
  return {
    type: 'FETCH_AUTH_SUCCESS'
  }
}

const authError= () => {
  return {
    type: 'FETCH_AUTH_ERROR'
  }
}

const fetchAuth = (chatService, dispatch) => () => {
  dispatch(authRequest())
  chatService.homeRedirect()
    .then(() => dispatch(authError()))
    .catch(() => dispatch(authSuccess()))
}

const sendLogin = () => {
  return {
    type: 'SEND_LOGIN_POST'
  }
}

const successLogin = () => {
  return {
    type: 'SUCCESS_LOGIN_POST'
  }
}

const notLoggedIn = () => {
  return {
    type: 'FAILURE_LOGIN_POST'
  }
}

const handleLogin = (chatService, dispatch) => (data) => {
  dispatch(sendLogin())
  chatService.loginPost(data)
             .then(() => dispatch(successLogin()))
             .catch(() => dispatch(notLoggedIn()))
}


const checkRegisterValid = (obj) => {
  return {
    type: 'CHECK_VALID',
    payload: obj
  }
}

const successRegister = () => {
    return {
      type: 'FETCH_REGISTER_SUCCESS'
    }
}

const failureRegister = () => {
    return {
      type: 'FETCH_REGISTER_FAILURE'
    }
}

const requestRegister = () => {
    return {
      type: 'FETCH_REGISTER_REQUEST'
    }
}


const handleRegister = (chatService, dispatch) => (data) => {
  dispatch(requestRegister())
  chatService.register(data)
             .then(() => {
               alert('Спасибо за регистрацию, можете войти')
               dispatch(successRegister())

             })
             .catch(() => dispatch(failureRegister()))

}
export {
  fetchAuth,
  handleLogin,
  checkRegisterValid,
  handleRegister
}
