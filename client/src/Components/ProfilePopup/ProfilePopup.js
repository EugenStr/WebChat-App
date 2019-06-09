import React from 'react';
import './ProfilePopup.sass'

class ProfilePopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        surname: this.props.surname,
        avatar: '',
        setAvatar: this.props.avatar,
        nameIsValid: true,
        surnameIsValid: true,
        avatarIsValid: true
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    let name, surname, avatar, result = true;
    let regExp = /http:\/\/.+?\.jpg|jpeg/gi
      if (this.state.name.length > 3) {
          name = this.state.name
      }
      else {
        this.setState({
          nameIsValid: false
        })
        result *= false;
      }
      if (this.state.surname.length > 3) {
        surname = this.state.surname
      }
      else {
        this.setState({
          surnameIsValid: false
        })
        result *= false;
      }
      if (regExp.test(this.state.avatar)) {
        avatar = this.state.avatar
      }
      else {
        this.setState({
          avatarIsValid: false
        })
        result *= false;
      }
    if (!result) {
      return
    }

    fetch('/home/profile', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name,
        avatar,
        surname,
        id: this.props.id
      })
    }).then(res => {
      if (res.ok) {
      return res.json()
      }
    }).then(res => {
      if (res !== undefined) {
        this.setState({
          setAvatar: res.avatar
        })
        window.location = '/'
      }
    })
  }

  render() {
    return (
      <div className="profile-popup">
        <span className="close" onClick={this.props.click}></span>
        <p>Редактировать профиль</p>
        <label className="label-name">Имя<input placeholder="Введите имя" type="text" name="name" value={this.state.name} className={this.state.nameIsValid ? "profile-popup__input" : "profile-popup__input red"} onChange={this.handleChange}/></label><br />
        <label className="label-surname">Фамилия<input placeholder="Введите фамилию" type="text" name="surname" value={this.state.surname} className={this.state.surnameIsValid ? "profile-popup__input" : "profile-popup__input red"} onChange={this.handleChange}/></label><br />
        <label className="label-avatar">Аватар<input placeholder="URL изображения" type="url" name="avatar" value={this.state.avatar} className={this.state.avatarIsValid ? "profile-popup__input profile-popup__avatar" : "profile-popup__input profile-popup__avatar red"} onChange={this.handleChange}/></label><br />
        <button className="submit-changes" onClick={this.handleSubmit}>Сохранить изменения!</button>
        <img className="popup-user" alt="user-avatar" src={this.state.setAvatar} />
      </div>
    )
  }

}


export default ProfilePopup
