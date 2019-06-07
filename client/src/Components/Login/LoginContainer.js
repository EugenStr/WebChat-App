import React from 'react';
import Login from './Login'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { handleLogin, fetchAuth } from '../../actions'
import { Redirect } from 'react-router-dom'

class LoginContainer extends React.Component {
	state = {
		email: '',
		password: ''
	}

	logIn = () => {
		const {email, password} = this.state
		this.props.handleLogin({email, password})
	}

	componentDidMount() {
		this.props.fetchAuth()
	}

	handleChangeInput = (e) => {
		const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
	}

	render() {
			const {loginError, isLogged} = this.props
			if (isLogged) {
				return <Redirect to='/' />
			}
      return (<Login handleChange={this.handleChangeInput}
                     loginError={loginError}
                     email={this.state.email}
                     password={this.state.password}
                     logIn={this.logIn}
              />)
		}
}

const mapStateToProps = ({loginError, isLogged}) => {
	return {loginError, isLogged}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { chatService } = ownProps;

	return {
		handleLogin: (data) => handleLogin(chatService, dispatch)(data),
		fetchAuth: fetchAuth(chatService, dispatch)
	}
}
/*Изменить ссылку*/
export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
