import React from 'react';
import ChatWrapper from './ChatWrapper'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { getCurrentUser, addedNewMessage } from '../../actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'
import withSockets from '../hoc/withSockets'

class ChatWrapperContainer extends React.Component {

  static propTypes = {
    chatService: PropTypes.object,
    getCurrentUser: PropTypes.func,
    isLogged: PropTypes.bool,
    loading: PropTypes.bool,
    addedNewMessage: PropTypes.func
  }

  componentDidMount() {

    this.props.getCurrentUser()
    const {socket, addedNewMessage} = this.props
    socket.on('chat', data => {
      addedNewMessage(data)
    })
  }

  componentWillUnmount() {
      const {socket, addedNewMessage} = this.props
      socket.off('chat', data => {
        addedNewMessage(data)
      })
  }

  render() {

    const {isLogged, loading} = this.props

    if (isLogged === false) {
      return <Redirect to='/auth' />
    }

    if (loading) {
      return <Spinner />
    }

    return (
      <ChatWrapper {...this.props} />
    )
  }
}

const mapStateToProps = ({isLogged, loading}) => {
  return {isLogged, loading}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {chatService} = ownProps;

  return {
    getCurrentUser: getCurrentUser(chatService, dispatch),
    addedNewMessage: (message) => dispatch(addedNewMessage(message))
  }
}

export default withChatService()(withSockets()(connect(mapStateToProps, mapDispatchToProps)(ChatWrapperContainer)))
