import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './scaff.css';
import './style.css';
import App from './Components/App.js'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	), document.getElementById('root'));
