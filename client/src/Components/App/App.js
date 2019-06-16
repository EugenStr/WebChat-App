import React from 'react';
import './App.sass'
import Auth from '../Auth/Auth'
import ChatWrapperContainer from '../ChatWrapper/ChatWrapperContainer'
import {Switch, Route} from 'react-router-dom';


const App = () => {
        return (
            <div className="app-wrapper">
              <Switch>
                <Route path='/auth/' component={Auth} />
                <Route path='/' exact component={ChatWrapperContainer} />
                <Route render={() => <h1 className='not-found'><span>404</span> Page Not Found</h1>} />
              </Switch>
            </div>
        )
}

export default App
