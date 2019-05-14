import React from 'react';
import Header from './Header/Header'
import AsideBar from './AsideBar/AsideBar'
import Chat from './Chat/Chat'


class MainChat extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        surname: '',
        avatar: '',
        _id: ''
      }
  }

  componentDidMount() {
    fetch('http://localhost:5000/login', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      credentials: 'include'
		}).then(res => {
      if (res.status !== 200) {
          window.location = '/auth'
      }
      else {
        return  res.json()
      }
    }).then(resJson => {
      if (resJson !== undefined) {
        this.setState({
          name: resJson[0].name,
          surname: resJson[0].surname,
          avatar: resJson[0].avatar,
          _id: resJson[0]._id
        })
      }
    })
  }

  render() {
        return (
            <div className="mainchat-wrapper">
                <Header name={this.state.name} avatar={this.state.avatar} id={this.state._id} surname={this.state.surname}/>
                <AsideBar />
                <Chat name={this.state.name} avatar={this.state.avatar}/>
            </div>
        )
      }
}


export default MainChat
