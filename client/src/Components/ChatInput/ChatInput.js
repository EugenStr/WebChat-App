import React from 'react';
import Send from '../../../img/send.png'


class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isEmpty: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.sendMes = this.sendMes.bind(this)
    this.sendMesPressEnter = this.sendMesPressEnter.bind(this)
  }


  handleChange(e) {
    this.setState({
      isEmpty: false,
      message: e.target.value
    })
  }

  sendMes() {
    if (this.state.message === '') {
      this.setState({
        isEmpty: true
      })
    }
    else {
      this.props.send(this.state.message)
      this.setState({
        message: ''
      })
    }
  }

  sendMesPressEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.state.message === '') {
        this.setState({
          isEmpty: true
        })
      }
      else {
        this.props.send(this.state.message)
        this.setState({
          message: ''
        })
      }
    }
  }
  render() {
    return (
    	<div className="chat-input-wrapper">
        <textarea  onKeyPress={this.sendMesPressEnter} className={this.state.isEmpty ? "chat-input--text red" : "chat-input--text" } tabIndex='0' placeholder="Введите сообщение.."  onChange={this.handleChange} value={this.state.message}></textarea>

    		<button className="send-message-btn" type="button" onClick={this.sendMes}><img className="send-message__img" src={Send} alt="send"/></button>
    	</div>
    )
  }
}

export default ChatInput
