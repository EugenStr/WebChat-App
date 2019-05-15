import React from 'react';
import posed from 'react-pose'
import Profile from './Profile'
import UserPopup from './UserPopup'
import Logo from '../../../img/Android_O_Preview_Logo.png'

const UserPanel = posed.ul({
  visible: {
    opacity: 1,
    transition: {
      duration: 200
    }
  },
  hidden: {
    opacity: 0
  }

})

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenProfile = this.handleOpenProfile.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.closePopup = this.closePopup.bind(this)
    this.state = {
      profileClick: false,
      profileIsOpen: false
    }
  }

  handleClick() {
    this.setState({
      profileClick: !this.state.profileClick
    })
  }

  handleOpenProfile() {
    this.setState({
      profileIsOpen: !this.state.profileIsOpen,
      profileClick: !this.state.profileClick
    })
  }

  closePopup() {
    this.setState({
      profileIsOpen: false
    })
  }

  handleLogout() {
    fetch('/login/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
      },
      credentials: 'include'
    }).then(res => {
      if (res.ok) {
        window.location = '/auth/login'
      }
    })
  }
  render() {

    return (<div className="header-wrapper">
      <div className="header-logo">
        <img className="header-auth__logo" src={Logo} alt="logo"/>
        <p className="header-auth__title">Web<span>Chat</span>
        </p>
      </div>
      <Profile handleClick={this.handleClick} name={this.props.name} avatar={this.props.avatar}/>
      {this.state.profileClick ? <UserPanel className="profile-menu" pose={this.state.profileClick
          ? 'visible'
          : 'hidden'}>
        <li className="profile-menu__item" onClick={this.handleOpenProfile}>Редактировать профиль</li>
        <li className="profile-menu__item" onClick={this.handleLogout}>Выйти</li>
      </UserPanel> : ''}
      {this.state.profileIsOpen ? <UserPopup  click={this.closePopup} id={this.props.id} name={this.props.name} avatar={this.props.avatar} surname={this.props.surname}/> : false}
    </div>)
  }

}
