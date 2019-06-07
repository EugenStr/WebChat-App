import React from 'react';
import './Choose.sass'
import { Link } from 'react-router-dom'

const Choose = () => {
  return(
    <div className="choose-wrapper">
      <h1 className="auth-title">Добро пожаловать!</h1>
      <Link to="/register" className="choose-buttons">Регистрация</Link>
      <Link to="/login" className="choose-buttons">Войти</Link>
    </div>
  )
}

export default Choose
