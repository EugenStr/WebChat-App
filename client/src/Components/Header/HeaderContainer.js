import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {userPanelToogle} from '../../actions'
import Header from './Header'

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = ({currentUser, userPanelisOpen}) => {
  return {currentUser, userPanelisOpen}
}

const mapDispatchToProps = {
  userPanelToogle
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
