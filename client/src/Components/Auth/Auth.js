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
							<Route render={() => <h1 className="error-404">404: Страница не найдена</h1>} />
						</Switch>
				</div>
		)
}

export default Auth
