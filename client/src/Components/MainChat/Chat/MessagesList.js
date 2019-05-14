import React from 'react';
import Message from './Message';


class MessagesList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messagesHistory: []
		}
	}

	messagesEnd = React.createRef()

	componentDidMount() {
		fetch('http://localhost:5000/home/chat', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if (res.ok) {
				return res.json()
			}
			else {
				alert('error')
			}
		}).then(res=> {
			if (res !== undefined) {
				this.setState({
					messagesHistory: res
				})
			}
		})
    this.scrollToBottom();
  }

	componentDidUpdate() {
    this.scrollToBottom();
  }

	scrollToBottom = () => {
  	this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  }

	render() {
			return (
	    	<div className="messages-wrapper">
					<div className="messages-list" >
						{this.state.messagesHistory ? this.state.messagesHistory.map(el => <Message avatar={el.senderAvatar} name={el.senderName} message={el.message} key={el.sendTime} date={el.sendTime}/>)  : ''}
						{this.props.messages.map(el => <Message avatar={el.avatar} name={el.sender} message={el.message} key={el.avatar + el.sender + el.date} date={el.date}/>)}
						<div style={{ float:"left", clear: "both" }}
	              ref={this.messagesEnd}>
	        	</div>
					</div>

				</div>
			)
		}
}

export default MessagesList
