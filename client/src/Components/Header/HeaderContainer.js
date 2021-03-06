import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {userPanelToogle, profileEditToogle, logOut} from '../../actions'
import Header from './Header'
import withChatService from '../hoc/withChatService'

class HeaderContainer extends React.Component {

  static propTypes = {
    chatService: PropTypes.object,
    currentUser: PropTypes.object,
    logOut: PropTypes.func,
    profileEditToogle: PropTypes.func,
    profilePopupisOpen: PropTypes.bool,
    userPanelToogle: PropTypes.func,
    userPanelisOpen: PropTypes.bool
  }

  render() {

    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = ({currentUser, userPanelisOpen, profilePopupisOpen}) => {
  return {currentUser, userPanelisOpen, profilePopupisOpen}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { chatService } = ownProps
   return {
    userPanelToogle: () => dispatch(userPanelToogle()),
    profileEditToogle: () => dispatch(profileEditToogle()),
    logOut: logOut(chatService, dispatch)
  }
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))
