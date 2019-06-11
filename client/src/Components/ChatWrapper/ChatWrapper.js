import React from 'react';
import './ChatWrapper.sass'
import HeaderContainer from '../Header/HeaderContainer'
import PeopleListContainer from '../PeopleList/PeopleListContainer'

const ChatWrapper = () => {
  return (
      <div className="mainchat-wrapper">
        <HeaderContainer />
        <PeopleListContainer />
      </div>
  )
}

export default ChatWrapper
