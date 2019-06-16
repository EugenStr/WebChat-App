import React from 'react';
import Chat from './Chat'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class ChatContainer extends React.Component {
  static propTypes = {
    currentUser: PropTypes.object,
    newMessages: PropTypes.array,
    messagesHistory: PropTypes.array
  }

  render() {

    return (
      <Chat {...this.props}/>
    )
  }
}

const mapStateToProps = ({currentUser, newMessages, messagesHistory}) => {
  return {currentUser, newMessages, messagesHistory}
}


export default connect(mapStateToProps)(ChatContainer)
