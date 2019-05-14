import React from 'react';
import UserItem from './UserItem'



class AsideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    }
  }
  componentWillMount() {
    fetch('http://localhost:5000/home/aside', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
			}
		}).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(resJson => {
      resJson.map(el => {el._id = null, el.password = null, el.email = null, el.__v = null})
      this.setState({
        allUsers: resJson
      })
    })
  }

  render() {
    return (
      <div className="aside-bar">
        <p className="aside-bar__title">Все пользователи:</p>
  			<ul className="users-list">
          {this.state.allUsers.map(item => <UserItem name={item.name} surname={item.surname} avatar={item.avatar} key={item.name + item.surname}/> )}
  			</ul>
		 </div>
    )
  }
}

export default AsideBar
