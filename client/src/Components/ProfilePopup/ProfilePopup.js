import React from 'react';
import './ProfilePopup.sass'
import SmallSpinner from '../SmallSpinner/SmallSpinner'

const  ProfilePopup  = ({currentUser, inputs, handleChange, profileEditToogle, patchUserData, userDataEditLoading}) => {

    return (
      <div className='shape-background' >
        <div className="profile-popup">
          <span className="close" onClick={profileEditToogle}></span>
          <p>Редактировать профиль</p>
          <label className="label-name">
            Имя
            <input placeholder="Введите имя" type="text" name="name"
              value={inputs.name}
              className="profile-popup__input"
              onChange={handleChange}/></label><br />
          <label className="label-surname">
            Фамилия
            <input placeholder="Введите фамилию" type="text" name="surname"
              value={inputs.surname}
              className="profile-popup__input"
              onChange={handleChange}/></label><br />
          <label className="label-avatar">
            Аватар
            <input placeholder="URL изображения" type="url" name="avatar"
              value={inputs.avatar}
              className= "profile-popup__input profile-popup__avatar"
              onChange={handleChange}/></label><br />
            <button className="submit-changes" onClick={patchUserData}>Сохранить изменения!</button>
          <img className="popup-user" alt="user-avatar" src={currentUser.avatar} />
          {userDataEditLoading ? <SmallSpinner /> : ''}
        </div>
      </div>
    )
}


export default ProfilePopup
