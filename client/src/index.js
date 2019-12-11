import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
});

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
