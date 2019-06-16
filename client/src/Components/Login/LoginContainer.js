import React, {Fragment} from 'react';
import Login from './Login'
import withChatService from '../hoc/withChatService'
import { connect } from 'react-redux'
import { handleLogin, fetchAuth } from '../../actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'

class LoginContainer extends React.Component {

	static propTypes = {
    chatService: PropTypes.object,
    fetchAuth: PropTypes.func,
    handleLogin: PropTypes.func,
    isLogged: PropTypes.bool,
    loginError: PropTypes.bool,
    loading: PropTypes.bool
  }

	state = {
		email: '',
		password: ''
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

			const {loginError, isLogged, loading, handleLogin} = this.props;
			const {email, password} = this.state

			if (isLogged) {
				return <Redirect to='/' />
			}
      return (
				<Fragment>
				<Login handleChange={this.handleChangeInput}
                     loginError={loginError}
                     email={this.state.email}
                     password={this.state.password}
                     handleLogin={() => handleLogin({email, password})}
              />
						{loading ? <Spinner /> : false}
			  </Fragment>
		)
		}
}

const mapStateToProps = ({loginError, isLogged, loading}) => {
	return {loginError, isLogged, loading}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { chatService } = ownProps;

	return {
		handleLogin: (data) => handleLogin(chatService, dispatch)(data),
		fetchAuth: fetchAuth(chatService, dispatch)
	}
}

LoginContainer.propTypes = {
  chatService: PropTypes.object,
  fetchAuth: PropTypes.func,
  handleLogin: PropTypes.func,
  isLogged: PropTypes.bool,
  loginError: PropTypes.bool
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
