import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/reset.css';
import './styles/scaff.css';
import App from './Components/App/App'
import { BrowserRouter as Router} from 'react-router-dom'
import ChatService from './services/ChatService'
import store from './store'
import {ChatServiceProvider} from './Components/ChatServiceContext/ChatServiceContext'

const requests = new ChatService();

ReactDOM.render((
  <Provider store={store}>
    <ChatServiceProvider value={requests}>
      <Router>
        <App />
      </Router>
    </ChatServiceProvider>
  </Provider>

), document.getElementById('root'));
