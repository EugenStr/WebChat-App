import React, { Fragment } from 'react'
import Register from './Register'
import formValid from '../../validation'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { checkRegisterValid, fetchAuth, handleRegister} from '../../actions'
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


  handleSubmit = (e) => {
    const {handleRegister, checkRegisterValid} = this.props
    e.preventDefault()
    const valid = formValid(this.state)
    checkRegisterValid(valid)
    if (valid.every(el => el === 1)) {
      handleRegister(this.state)
    }
  }


  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { isLogged, isRegistered, emailIsBusy, loading} = this.props
    if (isLogged) {
      return <Redirect to="/" />
    }
    if (isRegistered) {
      return <Redirect to='/login' />
    }
    return (
      <Fragment>
        <Register {...this.state} handleChange={this.handleUserInput} handleSubmit={this.handleSubmit} registerValid={this.props.registerValid} emailIsBusy={emailIsBusy} />
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
    checkRegisterValid: (obj) => dispatch(checkRegisterValid(obj)),
    handleRegister: (data) => handleRegister(chatService, dispatch)(data)
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
