import React from 'react';
import Chat from './Chat'
import {connect} from 'react-redux'


class ChatContainer extends React.Component {

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
