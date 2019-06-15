import React from 'react';
import './ChatInput.sass'
import Send from '../../img/send.png'

const ChatInput = ({isEmpty, handleChange, message, createMessage, postPressEnter}) => {
  return (
    <div className="chat-input-wrapper">
      <textarea onKeyPress={postPressEnter} className={isEmpty ? "chat-input--text red" : "chat-input--text" } tabIndex='0' placeholder="Введите сообщение.."  onChange={handleChange} value={message}></textarea>
      <button className="send-message-btn" type="button" onClick={createMessage}><img className="send-message__img" src={Send} alt="send"/></button>
    </div>
  )
}

export default ChatInput
