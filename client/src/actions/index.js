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

const succesLogin = () => {
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
             .then(() => dispatch(succesLogin()))
             .catch(() => dispatch(notLoggedIn()))
}


export {
  fetchAuth,
  handleLogin
}
