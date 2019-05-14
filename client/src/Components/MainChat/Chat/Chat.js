import React from 'react';
import ChatInput from './ChatInput';
import MessagesList from './MessagesList';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.doSmth = this.doSmth.bind(this);
    socket.on('chat', data => {
      this.doSmth(data)
    })
  }

  doSmth(data) {
    this.setState({
      messages: [...this.state.messages, data]
    })
  }

  sendMessage(chatMessage) {
    const message =  chatMessage
    const date = new Date().toLocaleString()
    socket.emit('chat', {
      message,
      sender: this.props.name,
      avatar: this.props.avatar,
      date
    })
    fetch('http://localhost:5000/home/chat', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
      },
      credentials: 'include',
      body: JSON.stringify({sender: this.props.name, message, avatar: this.props.avatar, date})
  }).then(res => {
    if (!res.ok) {
      alert('ERROR 500')
    }
  })

  }

  render() {
    return (
      <div className = "chat-wrapper">
          <MessagesList messages={this.state.messages}/>
          <ChatInput send={this.sendMessage}/ >
      </div>
    )
  }
}

export default Chat
