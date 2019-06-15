import React from 'react';
import ChatInputContainer from '../ChatInput/ChatInputContainer';
import MessageListContainer from '../MessageList/MessageListContainer';
import './Chat.sass'


const Chat = () => {
    return (
      <div className = "chat-wrapper">
          <MessageListContainer />
          <ChatInputContainer />
      </div>
    )
}

export default Chat
