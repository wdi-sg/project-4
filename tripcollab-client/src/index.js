import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ======== !!! IMPORTANT !!! ========
// Leave the code below commented out until Darren gives the green light
// - This incorporates `home.js` as the landing page.
// - The Go button will then initialize a new trip and load `App.js`

// import React from 'react';
// import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
//
// // Stylesheets
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/Home.css';
//
// // Home.js
// import Home from '../components/Home';
//
// ReactDOM.render(<Home />, document.getElementById('root'));
// registerServiceWorker();
