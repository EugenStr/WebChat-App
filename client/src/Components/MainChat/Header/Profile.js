import React from 'react';

const Profile = (props) => {
        return (
            <div className="user user-panel" onClick={props.handleClick}>
       	 			<p className="user-name">{props.name}</p>
       	 			<img className="avatar user-avatar" src={props.avatar} alt="avatar"></img>
       		</div>
        )
}

export default Profile
