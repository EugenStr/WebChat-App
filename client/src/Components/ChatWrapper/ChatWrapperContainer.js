import React from 'react';
import ChatWrapper from './ChatWrapper'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'

class ChatWrapperContainer extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {

    const {isLogged, loading} = this.props

    if (isLogged === false) {
      return <Redirect to='/auth/login' />
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
    getCurrentUser: getCurrentUser(chatService, dispatch)
  }
}


export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(ChatWrapperContainer))
