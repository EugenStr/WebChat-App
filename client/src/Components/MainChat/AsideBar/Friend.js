import React from 'react';


	
const Friend = (props) => {
    return (
    	<li className="user friend-item">
			<img className="avatar friend-item__avatar" src={props.avatar} alt="Avatar"></img>
			<p className="friend-item__name">{props.name} {props.surname}</p>
		</li>
    )
}


export default Friend