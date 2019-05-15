import React from 'react';
import HeaderAuth from './HeaderAuth';
import Choose from './Choose';
import Register from './Register';
import Login from './Login';
import { Route } from 'react-router-dom'

class Auth extends React.Component {

	render () {
		return (
			<div className="auth-wrapper">
				<HeaderAuth />
				<div>
					<Route exact path='/auth' component={Choose} />
					<Route exact path='/auth/register' component={Register} />
          <Route exact path='/auth/login' component={Login} />
				</div>
			</div>
		)
	}

}

export default Auth


//<LogIn />
