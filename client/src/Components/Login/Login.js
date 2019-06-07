import React from 'react';
import login from '../../img/login.png'
import pass from '../../img/pass.png'
import LoginError from '../LoginError/LoginError'
import './Login.sass'
import { Link } from 'react-router-dom'

const Login = ({handleChange, loginError, email, password, logIn}) => {

	return (
		<div className="login">
			<h2 className="login-title"> Вход </h2>
			<form className="login-form">
				<span className="login-input-span"><img src={login} alt='register-icon'/><input className="login-input login-input__first" placeholder="E-mail" name="email" value={email} onChange={handleChange}></input></span>
				<span className="login-input-span"><img src={pass} alt='register-icon'/><input className="login-input login-input__last" placeholder="Пароль" type="password" name="password" value={password} onChange={handleChange}></input></span>
				{loginError ? <LoginError /> : ''}
				<button type="button" className="auth-submit__login" onClick={logIn}>Войти!</button>
			</form>
			<p className="change-auth" >Еще не создали аккаунт?</p>
			<Link to='/register' className="login-link">Регистрация!</Link>
		</div>
	)
}

export default Login
