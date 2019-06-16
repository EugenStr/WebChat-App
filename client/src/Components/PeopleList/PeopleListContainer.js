import React from 'react'
import PeopleList from './PeopleList'
import withChatService from '../hoc/withChatService'
import {connect} from 'react-redux'
import { fetchUsers } from '../../actions'
import PropTypes from 'prop-types'

class PeopleListContainer extends React.Component {

  static propTypes = {
    chatService: PropTypes.object,
    allUsers: PropTypes.array,
    fetchUsers: PropTypes.func
  }

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
