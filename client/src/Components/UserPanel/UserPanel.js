import React from 'react';
import './UserPanel.sass'

const UserPanel = ({logout, profileEditToogle}) => {

  return (
    <ul className="profile-menu">
      <li className="profile-menu__item" onClick={profileEditToogle}>Редактировать профиль</li>
      <li className="profile-menu__item" onClick={logout}>Выйти</li>
    </ul>
  )
}

export default UserPanel
