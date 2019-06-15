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
  userDataEditLoading: false,
  allUsers: [],
  newMessages: [],
  messagesHistory: [],
  messagesLoading: false,
  messageIsEmpty: false
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
        userPanelisOpen: false,
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

    case 'PATCH_USERDATA_FAILURE' :
      return {
        ...state,
        userDataEditLoading: false
      }

    case 'FETCH_USERS_REQUEST' :
      return {
        ...state,
        userDataEditLoading: true
      }

    case 'FETCH_USERS_SUCCESS' :
      return {
        ...state,
        userDataEditLoading: false,
        allUsers: action.payload
      }

    case 'FETCH_USERS_FAILURE' :
      return {
        ...state,
        userDataEditLoading: false
      }

    case 'ADD_NEW_MESSAGE' :
      return {
        ...state,
        newMessages: [...state.newMessages, action.payload]
      }

    case 'FETCH_MESSAGES_REQUEST' :
      return {
        ...state,
        messagesLoading: true
      }

    case 'FETCH_MESSAGES_SUCCESS' :
      return {
        ...state,
        messagesLoading: false,
        messagesHistory: action.payload
      }

    case 'FETCH_MESSAGES_FAILURE' :
      return {
        ...state,
        messagesLoading: false
      }

    case 'EMPTY_MESSAGE' :
      return {
        ...state,
        messageIsEmpty: true
      }

    case 'START_WRITE_MESSAGE' :
      return {
        ...state,
        messageIsEmpty: false
      }

    default:
      return state

  }
}

export default reducer
