import React from 'react'
import Register from './Register'


export default class RegisterContainer extends React.Component {

    state = {
      name: '',
      surname: '',
      login: '',
      password: '',
      confirmPass: '',
      email: '',
      nameValid: null,
      surnameValid: null,
      passwordValid: null,
      emailValid: null,
      confirmPassValid: null,
      emailIsBusy: null
}

  componentDidMount() {
		fetch('/login/homeRedirect', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      credentials: 'include'
		}).then(res => {
			if (res.status === 401) {
				window.location = '/' //TODO
			}
		})
	}

  regExp(reg, value) {
    return reg.test(value)
  }

  nameValidation() {
    if ( this.state.name.length < 3 || !this.regExp(/^[A-zА-яЁё]+$/, this.state.name)) {
      this.setState({nameValid: false})
      return false;
    }
    else {
      this.setState({nameValid: true})
      return true;
    }
  }
  surnameValidation() {
    if (this.state.surname.length < 3 || !this.regExp(/^[A-zА-яЁё]+$/, this.state.surname)) {
      this.setState({surnameValid: false})
      return false;
    }
    else {
      this.setState({surnameValid: true})
      return true;
    }
  }
  confirmPassValidation() {
    if (this.state.password !== this.state.confirmPass) {
      this.setState({confirmPassValid: false})
      return false;
    }
    else {
      this.setState({confirmPassValid: true})
      return true;
    }
  }
  passwordValidation() {
    if (this.state.password.length < 6 || !this.regExp(/(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,}/g, this.state.password)) {
      this.setState({passwordValid: false})
      return false;
    }
    else {
      this.setState({passwordValid: true})
      return true;
    }
  }
  emailValidation() {
    if (!this.regExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g, this.state.email)) {
      this.setState({emailValid: false})
      return false;
    }
    else {
      this.setState({emailValid: true})
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
     this.nameValidation()
     this.surnameValidation()
     this.passwordValidation()
     this.emailValidation();
     this.confirmPassValidation()

     if (this.nameValidation() && this.surnameValidation() && this.passwordValidation() && this.emailValidation() && this.confirmPassValidation()) {
       const user = {
         name: this.state.name,
         surname: this.state.surname,
         login: this.state.login,
         password: this.state.password,
         email: this.state.email
       }

       fetch('/register', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({user})
       }).then(res => {
         if (res.status === 409) {
           this.setState({emailIsBusy: true})
         } else {
           window.location = '/'; //TODO
         }
       })


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
    return (
      <Register {...this.state} handleChange={this.handleUserInput} handleSubmit={this.handleSubmit}/>
    )
  }
}
