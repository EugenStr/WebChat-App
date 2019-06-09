import React from 'react';
import HeaderProfile from '../HeaderProfile/HeaderProfile'
import ProfilePopup from '../ProfilePopup/ProfilePopup'
import UserPanelContainer from '../UserPanel/UserPanelContainer'
import Logo from '../../img/Android_O_Preview_Logo.png'
import './Header.sass'


const Header = ({currentUser, userPanelisOpen, userPanelToogle}) => {

    return (
      <div className="header-wrapper">
        <div className="header-logo">
          <img className="header-auth__logo" src={Logo} alt="logo"/>
          <p className="header-auth__title">Web<span>Chat</span>
          </p>
        </div>
        <HeaderProfile currentUser={currentUser} userPanelToogle={userPanelToogle}/>
        {userPanelisOpen ? <UserPanelContainer /> : ''}
      </div>
    )
}


// <ProfilePopup />

export default Header
