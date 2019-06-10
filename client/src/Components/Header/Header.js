import React from 'react';
import HeaderProfile from '../HeaderProfile/HeaderProfile'
import ProfilePopupContainer  from '../ProfilePopup/ProfilePopupContainer'
import UserPanel from '../UserPanel/UserPanel'

import Logo from '../../img/Android_O_Preview_Logo.png'
import './Header.sass'


const Header = ({currentUser, userPanelisOpen, userPanelToogle, profilePopupisOpen, profileEditToogle, logOut}) => {
    return (
      <div className="header-wrapper">
        <div className="header-logo">
          <img className="header-auth__logo" src={Logo} alt="logo"/>
          <p className="header-auth__title">Web<span>Chat</span>
          </p>
        </div>

        <HeaderProfile currentUser={currentUser} userPanelToogle={userPanelToogle}/>
        {userPanelisOpen ? <UserPanel profileEditToogle={profileEditToogle} logout={logOut}  /> : ''}
        {profilePopupisOpen ? <ProfilePopupContainer /> : ''}
      </div>
    )
}


// <ProfilePopup />

export default Header
