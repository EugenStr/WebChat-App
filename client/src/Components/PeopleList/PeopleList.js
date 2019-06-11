import React from 'react';
import PeopleListItem from '../PeopleListItem/PeopleListItem'
import './PeopleList.sass'

const PeopleList = ({allUsers}) => {

    return (
      <div className="aside-bar">
        <p className="aside-bar__title">Все пользователи:</p>
  			<ul className="users-list">
          {allUsers.map(item => <PeopleListItem name={item.name} surname={item.surname} avatar={item.avatar} key={item.name + item.surname}/> )}
  			</ul>
		 </div>
    )

}

export default PeopleList
