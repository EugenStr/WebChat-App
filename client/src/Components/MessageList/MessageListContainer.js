import React from 'react';
import './MessageList.sass'
import {connect} from 'react-redux'
import MessageList from './MessageList'
import SmallSpinner from '../SmallSpinner/SmallSpinner'
import {fetchMessagesHistory} from '../../actions'
import withChatService from '../hoc/withChatService'

class MessagesList extends React.Component {

	componentDidMount() {
		this.props.fetchMessagesHistory()
  }

	render() {

		const {newMessages, messagesHistory, messagesLoading} = this.props
			if (messagesLoading) {
				return <SmallSpinner background="false"/>

			}

			return (
	    	<MessageList newMessages={newMessages} messagesHistory={messagesHistory}/>
			)
		}
}

const mapStateToProps = ({newMessages, messagesHistory, messagesLoading}) => {
	return {newMessages, messagesHistory, messagesLoading}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const {chatService} = ownProps

	return {
		fetchMessagesHistory: fetchMessagesHistory(chatService, dispatch)
	}
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(MessagesList))
