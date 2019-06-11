import React from 'react'
import PeopleList from './PeopleList'
import withChatService from '../hoc/withChatService'
import {connect} from 'react-redux'
import { fetchUsers } from '../../actions'

class PeopleListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {

    return (
      <PeopleList {...this.props}/>
    )
  }
}

const mapStateToProps = ({allUsers}) => {
  return {allUsers}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { chatService } = ownProps
  return {
    fetchUsers: fetchUsers(chatService, dispatch)
  }
}
export default withChatService()(connect(mapStateToProps, mapDispatchToProps)(PeopleListContainer))
