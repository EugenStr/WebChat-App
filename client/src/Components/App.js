import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainChat from './MainChat/MainChat.js'
import Auth from './Auth/Auth.js'



class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
              <Switch>
            	  <Route path='/auth' component={Auth} />
                <Route exact path='/' component={MainChat} />
              </Switch>
            </div>
        )
      }
}

export default App
