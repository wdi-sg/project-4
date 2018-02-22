import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.css';

// Home.js
import Home from './components/Home';
import App from './components/App';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Home}/>
      <Route path="/trip/:trip_id" component={App} />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
