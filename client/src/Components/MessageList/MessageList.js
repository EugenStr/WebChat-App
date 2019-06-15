import React from 'react';
import './MessageList.sass'
import MessageItem from '../MessageItem/MessageItem'

const MessageList = ({messagesHistory, newMessages, messagesEnd}) => {
	return (
		<div className="messages-wrapper">
			<div className="messages-list" >
				{messagesHistory ? messagesHistory.map(el=> <MessageItem avatar={el.senderAvatar} name={el.senderName} message={el.message} key={el.sendTime} date={el.sendTime}/>)  : ''}
				{newMessages ? newMessages.map(el=> <MessageItem avatar={el.avatar} name={el.sender} message={el.message} key={el.date} date={el.date}/>)  : ''}
			</div>
		</div>
	)
}

export default MessageList
