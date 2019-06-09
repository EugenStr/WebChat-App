import React from 'react';
import './Auth.sass';
import AuthHeader from '../AuthHeader/AuthHeader';
import ChooseContainer from '../Choose/ChooseContainer';
import LoginContainer from '../Login/LoginContainer'
import RegisterContainer from '../Register/RegisterContainer'
import {Switch, Route} from 'react-router-dom';

const Auth = () => {
		return (
				<div className="auth-wrapper">
						<AuthHeader />
						<Switch>
							<Route path="/auth" exact component={ChooseContainer} />
							<Route path="/auth/login" component={LoginContainer} />
							<Route path="/auth/register" component={RegisterContainer} />
						</Switch>
				</div>
		)
}

export default Auth

// <Route exact path='/auth/register' component={Register} />
// <Route exact path='/auth/login' component={Login} />
