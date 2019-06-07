import React from 'react'
import { ChatServiceConsumer } from '../ChatServiceContext/ChatServiceContext'

const withChatService = () => (Wrapped) => {
  return (props) => {
    return (
        <ChatServiceConsumer>
          {
            (chatService) => {
              return (<Wrapped {...props} chatService={chatService} />)
            }
          }
        </ChatServiceConsumer>
    )
  }
}

export default withChatService
