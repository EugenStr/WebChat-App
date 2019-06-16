import React from 'react';
import ProfilePopup from './ProfilePopup'
import { connect } from 'react-redux'
import {profileEditToogle, patchUserData} from '../../actions'
import withChatService from '../hoc/withChatService'
import PropTypes from 'prop-types'

class ProfilePopupContainer extends React.Component {

  static propTypes = {
    chatService: PropTypes.object,
    currentUser: PropTypes.object,
    patchUserData: PropTypes.func,
    profileEditToogle: PropTypes.func,
    userDataEditLoading: PropTypes.bool
  }

  state = {
    name: this.props.currentUser.name,
    surname: this.props.currentUser.surname,
    avatar: ''
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {name, surname, avatar} = this.state
    const {currentUser, patchUserData} = this.props

    return(
      <ProfilePopup {...this.props} inputs = {this.state} handleChange={this.handleChange} patchUserData={() => patchUserData({name, surname, avatar}, currentUser)}/>
    )
  }
}


const mapStateToProps = ({currentUser, userDataEditLoading}) => {
  return {currentUser, userDataEditLoading}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {chatService} = ownProps
  return {
    profileEditToogle: () => dispatch(profileEditToogle()),
    patchUserData: (data, currentUser) => patchUserData(chatService, dispatch)(data, currentUser)
  }
}

export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(ProfilePopupContainer))


//
// handleSubmit() {
//   fetch('/home/profile', {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'PATCH',
//     credentials: 'include',
//     body: JSON.stringify({
//       name,
//       avatar,
//       surname,
//       id: this.props.id
//     })
//   }).then(res => {
//     if (res.ok) {
//     return res.json()
//     }
//   }).then(res => {
//     if (res !== undefined) {
//       this.setState({
//         setAvatar: res.avatar
//       })
//       window.location = '/'
//     }
//   })
// }
