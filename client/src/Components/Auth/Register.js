import React from 'react';

import user from '../../img/user.png'

import pass from '../../img/pass.png'
import email from '../../img/email.png'
import Valid from './Valid'


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleSubmit = this.handleSubmit.bind(this)
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
				window.location = '/'
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

  handleSubmit(e) {
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
           window.location = '/auth/login';
           alert('Спасибо за регистрацию! Можете войти')
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
      <div className="auth register">
        <h2 className="auth-title">
          Регистрация
        </h2>
        <form className="register-form">
          <span className="input-span"><img src={user} alt='register-icon'/>
            <input className="auth-input first" placeholder="Имя" name="name" value={this.state.name} onChange={this.handleUserInput} required></input>
            {this.state.nameValid === false ? <Valid text='Поле "Имя" должно содержать более 2 символов, и не содержать цифр' /> : true }
          </span>
          <span className="input-span"><img src={user} alt='register-icon'/>
            <input className="auth-input" placeholder="Фамилия" name="surname" value={this.state.surname} onChange={this.handleUserInput} required></input>
            {this.state.surnameValid === false ? <Valid text='Поле "Фамилия" должно содержать более 2 символов, и не содержать цифр'/> : true }
          </span>
          <span className="input-span"><img src={pass} alt='register-icon'/>
            <input className="auth-input" placeholder="Пароль" type="password" name="password" value={this.state.password} onChange={this.handleUserInput} required></input>
            {this.state.passwordValid === false ? <Valid text='Поле "пароль" должно содержать более 5 символов латинского алфавита, и содержать минимум 1 цифру' /> : true }
          </span>
          <span className="input-span"><img src={pass} alt='register-icon'/>
            <input className="auth-input" placeholder="Подтвердите пароль" type="password" name="confirmPass" value={this.state.confirmPass} onChange={this.handleUserInput} required></input>
            {this.state.confirmPassValid === false ? <Valid text='Пароли не совпадают'/> : true }
          </span>
          <span className="input-span"><img src={email} alt='register-icon'/>
            <input className="auth-input last" placeholder="Email" name="email" type="Email" value={this.state.email} onChange={this.handleUserInput} required></input>
            {this.state.emailValid === false ? <Valid text='Неверный формат E-mail!'/> : true }
            {this.state.emailIsBusy === true ? <Valid text='Данный e-mail уже занят'/> : true }
          </span>
          <button type="submit" className="btn auth-submit" onClick={this.handleSubmit}>Зарегистрироваться!</button>
        </form>
        <p className="change-auth">Уже есть аккаунт?</p>
        <a className="login-link" href="/auth/login">Войти!</a>

      </div>
    )
  }
}

export default Register
