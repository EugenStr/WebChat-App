import React from 'react';



export default class Choose extends React.Component {
  componentDidMount() {
    fetch('http://localhost:5000/login/homeRedirect', {
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

  render() {
    return(
      <div className=" auth choose-wrapper">
        <h1 className="auth-title">Добро пожаловать!</h1>
        <a href="/auth/register"className="choose-buttons">Регистрация</a>
        <a href="/auth/login" className="choose-buttons">Войти</a>
      </div>
    )
  }
}
