import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Home from './Home'
import Contact from './Contact'
import German from './languages/German'
import Goethe from './schools/Goethe'

import Login from './authen/Login'
import Register from './authen/Register'
import { logout } from './authen/Auth'
import { firebaseAuth } from './fire'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, Switch
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

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authed: false,
      loading: true
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          authed: false,
          loading: false
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
            <nav>
              <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>{' '}
                <Link to="/goethe" className="navbar-brand">Goethe</Link>
                  {this.state.authed
                  ? <button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={() => { logout() }}
                    className="navbar-brand">Logout</button>
                    : <span>
                      <Link to="/login" className="navbar-brand">Login</Link>{' '}
                      <Link to="/register" className="navbar-brand">Register</Link>
                    </span> }
              </div>
            </nav>
              <div className="container">
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                    <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                    <PrivateRoute authed={this.state.authed} path='/goethe' component={Goethe} />
                    <Route render={() => <h3>No Match</h3>} />
                  </Switch>
              </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
