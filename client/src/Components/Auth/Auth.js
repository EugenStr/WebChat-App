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
							<Route path="/auth" component={ChooseContainer} />
							<Route path="/login" component={LoginContainer} />
							<Route path="/register" component={RegisterContainer} />
							<Route render={() => <h1 className='not-found'><span>404</span> Page Not Found</h1>} />
						</Switch>
				</div>
		)
}

export default Auth

// <Route exact path='/auth/register' component={Register} />
// <Route exact path='/auth/login' component={Login} />
