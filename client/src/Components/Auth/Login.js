import React from 'react';

import login from '../../img/login.png'
import pass from '../../img/pass.png'

import LoginError from './LoginError'


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this)
		this.handleChangeInput = this.handleChangeInput.bind(this)
		this.state = {
			email: '',
			password: '',
			errorMessage: null
		}
	}

	handleLogin() {
		this.setState({errorMessage: null})
		fetch('/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Origin': true
			},
			credentials: 'include',
			body: JSON.stringify({email: this.state.email, password: this.state.password})
	}).then(res => {
		if (res.status === 200) {
			window.location = '/'
		}
		else {
			return 	res.json()
		}
	}).then(res => {
		if (res !== undefined) {
			this.setState({errorMessage: res.message})
		}
	})
}

	componentDidMount() {
		fetch('/login/homeRedirect', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Origin': true
			},
			credentials: 'include'
	}).then(res => {
		if (!res.ok) {
			window.location = '/'
		}
	})
}

	handleChangeInput(e) {
		const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
	}
	render() {
			return (
				<div className="auth login">
					<h2 className="auth-title"> Вход </h2>
					<form className="register-form">
						<span className="input-span"><img src={login} alt='register-icon'/><input className="auth-input first" placeholder="E-mail" name="email" value={this.state.email} onChange={this.handleChangeInput}></input></span>
						<span className="input-span"><img src={pass} alt='register-icon'/><input className="auth-input last" placeholder="Пароль" type="password" name="password" value={this.state.password} onChange={this.handleChangeInput}></input></span>
						{this.state.errorMessage === null ? true : <LoginError message={this.state.errorMessage} />}
						<button type="button" className="auth-submit auth-submit__login" onClick={this.handleLogin}>Войти!</button>
					</form>
					<p className="change-auth" >Еще не создали аккаунт?</p>
					<a className="login-link" href="/auth/register">Регистрация!</a>
				</div>

			)
		}
}

export default Login
