import React from 'react';
import user from '../../img/user.png'
import pass from '../../img/pass.png'
import email from '../../img/email.png'
import Validation from '../Validation/Validation'
import './Register.sass'
import { Link } from 'react-router-dom'


const Register = ({handleChange, handleSubmit, registerValid, emailIsBusy, ...rest}) => {

  return (
    <div className="register">
      <h2 className="auth-title">
        Регистрация
      </h2>
      <form className="register-form">
        <span className="register-input-span"><img src={user} alt='register-icon'/>
          <input className="register-auth-input register-auth-input_first" placeholder="Имя" name="name" value={rest.name} onChange={handleChange} required></input>
          {registerValid[0] === 0 ? <Validation text='Поле "Имя" должно содержать более 2 символов, и не содержать цифр' /> : true }
        </span>
        <span className="register-input-span"><img src={user} alt='register-icon'/>
          <input className="register-auth-input" placeholder="Фамилия" name="surname" value={rest.surname} onChange={handleChange} required></input>
          {registerValid[1] === 0 ? <Validation text='Поле "Фамилия" должно содержать более 2 символов, и не содержать цифр'/> : true }
        </span>
        <span className="register-input-span"><img src={pass} alt='register-icon'/>
          <input className="register-auth-input" placeholder="Пароль" type="password" name="password" value={rest.password} onChange={handleChange} required></input>
          {registerValid[2] === 0 ? <Validation text='Поле "пароль" должно содержать более 5 символов латинского алфавита, и содержать минимум 1 цифру' /> : true }
        </span>
        <span className="register-input-span"><img src={pass} alt='register-icon'/>
          <input className="register-auth-input" placeholder="Подтвердите пароль" type="password" name="confirmPass" value={rest.confirmPass} onChange={handleChange} required></input>
          {registerValid[3] === 0 ? <Validation text='Пароли не совпадают'/> : true }
        </span>
        <span className="register-input-span"><img src={email} alt='register-icon'/>
          <input className="register-auth-input register-auth-input__last" placeholder="Email" name="email" type="Email" value={rest.email} onChange={handleChange} required></input>
          {registerValid[4] === 0 ? <Validation text='Неверный формат E-mail!'/> : true }
          {emailIsBusy ? <Validation text='Данный e-mail уже занят'/> : false}
        </span>
        <button type="button" className="btn register-submit" onClick={handleSubmit}>Зарегистрироваться!</button>
      </form>
      <p className="change-auth">Уже есть аккаунт?</p>
      <Link className="login-link" to="/login">Войти!</Link>
    </div>
  )
}

Register.defaultProps = {
  registerValid: [1,1,1,1,1]
}

export default Register
