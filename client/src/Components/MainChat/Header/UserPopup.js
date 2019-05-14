import React from 'react';

class UserPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        surname: '',
        avatar: ''
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
    let name, surname, avatar;
      if (this.state.name.length > 0) {
          name = this.state.name
      }
      else {
        name = this.props.name
      }
      if (this.state.surname.length > 0) {
        surname = this.state.surname
      }
      else {
        surname = this.props.surname
      }
      if (this.state.avatar.length > 10) {
        avatar = this.state.avatar
      }
      else {
        avatar = this.props.avatar
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
        window.location = '/'
      }
    })
  }

  render() {
    return (
      <div className="profile-popup">
        <span className="close" onClick={this.props.click}></span>
        <p>Редактировать профиль</p>
        <label>Имя<input placeholder="Введите имя" type="text" name="name" value={this.state.name} className="profile-popup__input" onChange={this.handleChange}/></label>
        <label>Фамилия<input placeholder="Введите фамилию" type="text" name="surname" value={this.state.surname} className="profile-popup__input" onChange={this.handleChange}/></label>
        <label>Аватар<input placeholder="URL изображения" type="url" name="avatar" value={this.state.avatar} className="profile-popup__input profile-popup__avatar" onChange={this.handleChange}/></label>
        <button className="submit-changes" onClick={this.handleSubmit}>Сохранить изменения!</button>
      </div>
    )
  }

}


export default UserPopup
