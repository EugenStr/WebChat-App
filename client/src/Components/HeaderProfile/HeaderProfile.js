import React from 'react';
import './HeaderProfile.sass'


const HeaderProfile = ({currentUser, userPanelToogle}) => {
        const {name, avatar} = currentUser
        return (
            <div className="user user-panel" onClick={userPanelToogle}>
       	 			<p className="user-name">{name}</p>
       	 			<img className="avatar user-avatar" src={avatar} alt="avatar"></img>
       		  </div>
        )
}

export default HeaderProfile
