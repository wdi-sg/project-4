import React, { Component } from 'react'
import './App.css'

import Home from './Home'
import Contact from './Contact'
import German from './languages/German'

import {
  BrowserRouter as Router,
  Route,
  Link
  } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">

        <Router>
          <div>
            <nav>
              <Link to="/german">Go to German Page</Link>{' '}
              <Link to="/">Go to Home Page</Link>{' '}
              <Link to="/contact">Contact Us</Link>{' '}
            </nav>
              <Route exact path="/" component={Home} />
              <Route path="/german" component={German} />
              <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
