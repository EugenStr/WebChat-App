import React, { Fragment } from 'react'
import Register from './Register'
import formValid from '../../validation'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { fetchAuth, handleRegister } from '../../actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'

class RegisterContainer extends React.Component {
    state = {
      name: '',
      surname: '',
      password: '',
      confirmPass: '',
      email: ''
}

  componentDidMount() {
    this.props.fetchAuth()
	}

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { isLogged, isRegistered, emailIsBusy, loading, handleRegister} = this.props
    if (isLogged) {
      return <Redirect to="/" />
    }
    if (isRegistered) {
      return <Redirect to='/auth/login' />
    }
    return (
      <Fragment>
        <Register {...this.state} handleChange={this.handleUserInput} handleSubmit={() => handleRegister(this.state)} registerValid={this.props.registerValid} emailIsBusy={emailIsBusy} />
        {loading ? <Spinner /> : false }
      </Fragment>

    )
  }
}

const mapStateToProps = ({isLogged, registerValid, isRegistered, emailIsBusy, loading}) => {
  return { isLogged, registerValid, emailIsBusy, isRegistered, loading}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { chatService } = ownProps
  return {
    fetchAuth: fetchAuth(chatService, dispatch),
    handleRegister: (data) => handleRegister(formValid, chatService, dispatch)(data)
  }
}

RegisterContainer.propTypes = {
  chatService: PropTypes.object,
  checkRegisterValid: PropTypes.func,
  emailIsBusy: PropTypes.bool,
  fetchAuth: PropTypes.func,
  handleRegister: PropTypes.func,
  isLogged: PropTypes.bool,
  registerValid: PropTypes.array
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))
