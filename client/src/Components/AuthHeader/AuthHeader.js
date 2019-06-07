import React from 'react';
import logo from '../../img/Android_O_Preview_Logo.png'
import './AuthHeader.sass'

const AuthHeader = () => {
	return (
		<div className="header-auth">
			<img className="header-auth__logo" src={logo} alt="logo" />
			<p className="header-auth__title">Web<span>Chat</span></p>
		</div>
	)
}

export default AuthHeader
