import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/reset.css';
import './styles/scaff.css';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import App from './Components/App/App'
import { BrowserRouter as Router} from 'react-router-dom'
import ChatService from './services/ChatService'
import store from './store'
import {ChatServiceProvider} from './Components/ChatServiceContext/ChatServiceContext'
import {SocketsProvider} from './Components/ChatServiceContext/SocketsContext'
import openSocket from 'socket.io-client';

const socket = openSocket('localhost:5000');
const requests = new ChatService();


ReactDOM.render((
  <Provider store={store}>
    <ErrorBoundary>
      <ChatServiceProvider value={requests}>
        <SocketsProvider value={socket}>
          <Router>
            <App />
          </Router>
        </SocketsProvider>
      </ChatServiceProvider>
    </ErrorBoundary>
  </Provider>

), document.getElementById('root'));
