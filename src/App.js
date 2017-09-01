import React, { Component } from 'react'
import './App.css'
import Nav from './navbar'
import Home from './homepage/Home'
import Contact from './Contact'
import French from './languages/French'
import German from './languages/German'
import Goethe from './schools/Goethe'
import Chalkboard from './images/Chalkboard.png'

import Login from './authen/Login'
import Register from './authen/Register'
import { firebaseAuth } from './fire'
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
  } from 'react-router-dom'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authed: false
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true
        })
      } else {
        this.setState({
          authed: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route exact path='/contact' component={Contact} />
              <Route path='/french' component={French} />
              <Route path='/german' component={German} />
              <PrivateRoute authed={this.state.authed} path='/goethe' component={Goethe} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
