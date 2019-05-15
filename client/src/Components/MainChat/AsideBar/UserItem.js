import React from 'react';

const UserItem = (props) => {
  return (
    <li className="user-list_item">
      <img className="avatar user-list__avatar" src={props.avatar} alt="avatar" />
      <p className="user-list__name">{props.name} {props.surname}</p>
    </li>
  )
}



export default UserItem
