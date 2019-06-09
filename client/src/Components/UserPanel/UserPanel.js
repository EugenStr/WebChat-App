import React from 'react';
import './UserPanel.sass'

const UserPanel = ({logOut}) => {

  return (
    <ul className="profile-menu">
      <li className="profile-menu__item">Редактировать профиль</li>
      <li className="profile-menu__item" onClick={logOut}>Выйти</li>
    </ul>
  )
}

export default UserPanel
