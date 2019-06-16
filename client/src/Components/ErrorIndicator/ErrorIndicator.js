import React from 'react'
import errorDragon from '../../img/Error.png'
import './ErrorIndicator.sass'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={errorDragon} alt='Erorr-img'/>
      <p>Упс, что-то пошло не так...</p>
      <button onClick={() => window.location.reload()}>Перезагрузить страницу</button>
    </div>
  )
}

export default ErrorIndicator
