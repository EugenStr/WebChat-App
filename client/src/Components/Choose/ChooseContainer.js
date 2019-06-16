import React from 'react';
import Choose from './Choose'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


class ChooseContainer extends React.Component {

  static propTypes = {
    chatService: PropTypes.object,
    fetchAuth: PropTypes.func,
    isLogged: PropTypes.bool
  }

  componentDidMount() {
    this.props.fetchAuth()
  }

  render() {

    const { isLogged } = this.props

    if (isLogged) {
      return <Redirect to="/" />
    }
    return (
      <Choose />
    )
  }
}

const mapStateToProps = ({isLogged}) => {
  return {isLogged}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {chatService} = ownProps;

  return {
    fetchAuth: fetchAuth(chatService, dispatch)
  }
}

ChooseContainer.propTypes = {
  fetchAuth: PropTypes.func,
  isLogged: PropTypes.bool
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(ChooseContainer))
