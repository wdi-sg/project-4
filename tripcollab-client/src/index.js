import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.css';

// Home.js
import Home from './components/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
