import React from 'react';
import './ChatInput.sass'
import ChatInput from './ChatInput'
import {connect} from 'react-redux'
import {postMessage, startWriteMessage} from '../../actions'
import withSockets from '../hoc/withSockets'
import withChatService from '../hoc/withChatService'
import PropTypes from 'prop-types'

class ChatInputContainer extends React.Component {

  static propTypes = {
    currentUser: PropTypes.object,
    chatService: PropTypes.object,
    messageIsEmpty: PropTypes.bool,
    postMessage: PropTypes.func,
    startWriteMessage: PropTypes.func
  }

  state = {
      message: ''
    }

  handleChange = (e) => {
    this.props.startWriteMessage()
    this.setState({
      message: e.target.value
    })
  }

  postPressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.postMessage(this.state.message, this.props.currentUser)
      this.setState({
        message: ''
      })
      this.setState({
        message: ''
      })
    }
  }

  createMessage = () => {
    const {postMessage, currentUser} = this.props

    postMessage(this.state.message, currentUser)

    this.setState({
      message: ''
    })
  }


  render() {

    return (
      <ChatInput createMessage={this.createMessage} postPressEnter={this.postPressEnter} handleChange={this.handleChange} isEmpty={this.props.messageIsEmpty} message={this.state.message}/>
    )
  }
}
const mapStateToProps = ({currentUser, messageIsEmpty}) => {
  return {currentUser, messageIsEmpty}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {chatService, socket} = ownProps
  return {
    postMessage: (message, currentUser) => postMessage(chatService, socket, dispatch)(message, currentUser),
    startWriteMessage: () => dispatch(startWriteMessage())
  }
}

export default withChatService()(withSockets()(connect(mapStateToProps, mapDispatchToProps)(ChatInputContainer)))
