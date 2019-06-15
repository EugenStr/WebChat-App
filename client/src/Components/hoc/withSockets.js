import React from 'react'
import { SocketsConsumer } from '../ChatServiceContext/SocketsContext'

const withSockets = () => (Wrapped) => {
  return (props) => {
    return (
        <SocketsConsumer>
          {
            (socket) => {
              return (<Wrapped {...props} socket={socket} />)
            }
          }
        </SocketsConsumer>
    )
  }
}

export default withSockets
