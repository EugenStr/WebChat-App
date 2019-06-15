import React from 'react';
import './MessageItem.sass'

const MessageItem = (props) => {
	return (
		<div className='message' key={props.id}>
			<img className="avatar message-avatar" src={props.avatar} alt={props.name}></img>
			<div className="name-message">
				<p className="sender-name">{props.name}</p>
				<p className="sender-message">{props.message}</p>
			</div>
			<span className="time">{props.date}</span>
		</div>
	)
}


export default MessageItem
