const initialState = {
  isLogged: null,
  loading: false,
  loginError: null,
  registerValid: [],
  isRegistered: null,
  emailIsBusy: null,
  currentUser: {},
  userPanelisOpen: false,
  profilePopupisOpen: false,
  userDataEditLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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


    case 'FETCH_CURRENT_USER_SUCCESS' :
      return {
        ...state,
        isLogged: true,
        loading: false,
        userDataEditLoading: false,
        currentUser: action.payload
      }

    case 'FETCH_CURRENT_USER_REQUEST' :
      return {
        ...state,
        isLogged: true,
        loading: true
      }

    case 'FETCH_CURRENT_USER_FAILURE' :
      return {
        ...state,
        isLogged: false,
        loading: false,
        userDataEditLoading: false
      }

    case 'LOGOUT_SUCCESS' :
      return {
        ...state,
        isLogged: false
      }

    case 'USER_PANEL_TOOGLE' :

      return {
        ...state,
        userPanelisOpen: !state.userPanelisOpen
      }

    case 'PROFILE_EDIT_TOOGLE' :
      return {
        ...state,
        userPanelisOpen: false,
        profilePopupisOpen: !state.profilePopupisOpen
      }


    case 'PATCH_USERDATA_REQUEST' :
      return {
        ...state,
        userDataEditLoading: true
      }

    case 'PATCH_USERDATA_SUCCESS' :
      return {
        ...state,
        userDataEditLoading: false
      }

    case 'PATCH_USERDATA_FAILURE' :
      return {
        ...state,
        userDataEditLoading: false
      }

    default:
      return state

  }
}

export default reducer
