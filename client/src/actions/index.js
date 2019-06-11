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


const handleRegister = (formValid, chatService, dispatch) => (data) => {
  const valid = formValid(data)
  console.log(valid)
  dispatch(checkRegisterValid(valid))
  if (valid.every(el => el === 1)) {
    dispatch(requestRegister())
    chatService.register(data)
               .then(() => {
                 alert('Спасибо за регистрацию, можете войти')
                 dispatch(successRegister())

               })
               .catch(() => dispatch(failureRegister()))
  }
}

const getUserRequest = () =>{
  return {
    type: 'FETCH_CURRENT_USER_REQUEST'
  }
}

const getUserSuccess = (data) => {
    return {
      type: 'FETCH_CURRENT_USER_SUCCESS',
      payload: data
    }
}

const getUserError = () => {
    return {
      type: 'FETCH_CURRENT_USER_FAILURE'
    }
}


const getCurrentUser = (chatService, dispatch) => () => {
  dispatch(getUserRequest())
  chatService.getCurrentUser()
             .then((data) => dispatch(getUserSuccess(data.data[0])))
             .catch(() => dispatch(getUserError()))
}


const logoutSuccess = () => {
    return {
      type: 'LOGOUT_SUCCESS'
    }
}


const logOut = (chatService, dispatch) => () => {
  chatService.logout()
             .then((data) => dispatch(logoutSuccess()))
             .catch((err) => alert(`Error: ${err}`))
}


const userPanelToogle = () => {
  return {
    type: 'USER_PANEL_TOOGLE'
  }
}

const profileEditToogle = () => {
  return {
    type: 'PROFILE_EDIT_TOOGLE'
  }
}

const patchUserDataRequest = () => {
  return {
    type: 'PATCH_USERDATA_REQUEST'
  }
}

const patchUserDataError = () => {
  return {
    type: 'PATCH_USERDATA_FAILURE'
  }
}

const patchUserData = (chatService, dispatch) => (data, currentUser) => {
    dispatch(patchUserDataRequest())
    chatService.patchUserData(data, currentUser)
               .then(() => {
                chatService.getCurrentUser()
                           .then((data) => dispatch(getUserSuccess(data.data[0])))
                           .catch(() => dispatch(getUserError()))
               })
               .catch(() => {
                 dispatch(patchUserDataError())
                 alert('Error')
               })
}

const getUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}

const getUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users
  }
}

const getUsersFailure = () => {
  return {
    type: 'FETCH_USERS_FAILURE'
  }
}


const fetchUsers = (chatService, dispatch) => () => {
  dispatch(getUsersRequest())
  chatService.getAllUsers()
             .then(res => dispatch(getUsersSuccess(res.data)))
             .catch(() => dispatch(getUsersFailure()))
}

export {
  fetchAuth,
  handleLogin,
  handleRegister,
  getCurrentUser,
  logOut,
  userPanelToogle,
  profileEditToogle,
  patchUserData,
  fetchUsers

}
