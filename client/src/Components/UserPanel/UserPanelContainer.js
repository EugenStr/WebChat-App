import React from 'react';
import UserPanel from './UserPanel'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import withChatService from '../hoc/withChatService'


class UserPanelContainer extends React.Component {

  render() {

    return(
      <UserPanel {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { chatService } = ownProps
  return {
    logOut: logOut(chatService, dispatch)
  }
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(UserPanelContainer))
