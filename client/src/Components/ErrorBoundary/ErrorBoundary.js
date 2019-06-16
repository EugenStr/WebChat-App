import React from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import { connect } from 'react-redux'
import { errorInApp } from '../../actions'
class ErrorBoundary extends React.Component {

  componentDidCatch() {
    this.props.errorInApp()
  }

  render() {
    if (this.props.appError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}

const mapStateToProps = ({appError}) => {
  return {appError}
}


export default connect(mapStateToProps, { errorInApp })(ErrorBoundary)
