import React from 'react';
import './ChatWrapper.sass'
import HeaderContainer from '../Header/HeaderContainer'
import PeopleListContainer from '../PeopleList/PeopleListContainer'
import ChatContainer from '../Chat/ChatContainer'



const ChatWrapper = () => {
  return (
      <div className="mainchat-wrapper">
        <HeaderContainer />
        <PeopleListContainer />
        <ChatContainer />
      </div>
  )
}

export default ChatWrapper
