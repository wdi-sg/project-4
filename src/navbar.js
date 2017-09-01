import React, { Component } from 'react'
import './App.css'

import Home from './homepage/Home'
import Contact from './Contact'
import French from './languages/French'
import German from './languages/German'
import Goethe from './schools/Goethe'
import Chalkboard from './images/Chalkboard.png'
import { DropdownButton, MenuItem } from 'react-bootstrap'

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

export default class Nav extends Component {
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
      <div>
        <Router>
          <div>
            <nav>
              <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>{' '}
                <Link to="/contact" className="navbar-brand">Contact</Link>{' '}

                <DropdownButton className="navbar-brand" title='Languages'>
                  <MenuItem href='/arabic'>Arabic</MenuItem>
                  <MenuItem href='/Bahasaindo'>Bahasa Indo</MenuItem>
                  <MenuItem href='/chinese'>Chinese</MenuItem>
                  <MenuItem href='/dutch'>Dutch</MenuItem>
                  <MenuItem href='/english'>English</MenuItem>
                  <MenuItem href='/french'>French</MenuItem>
                  <MenuItem href='/german'>German</MenuItem>
                  <MenuItem href='/greek'>Greek</MenuItem>
                  <MenuItem href='/hebrew'>Hebrew</MenuItem>
                  <MenuItem href='/italian'>Italian</MenuItem>
                  <MenuItem href='/japanese'>Japanese</MenuItem>
                  <MenuItem href='/korean'>Korean</MenuItem>
                  <MenuItem href='/russian'>Russian</MenuItem>
                  <MenuItem href='/spanish'>Spanish</MenuItem>
                  <MenuItem href='/tagalog'>Tagalog</MenuItem>
                  <MenuItem href='/thai'>Thai</MenuItem>
                  <MenuItem href='/vietnamese'>Vietnamese</MenuItem>
                </DropdownButton>

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
                    <PublicRoute authed={this.state.authed} path='/contact' component={Contact} />
                    <PublicRoute authed={this.state.authed} path='/french' component={French} />
                    <PublicRoute authed={this.state.authed} path='/german' component={German} />
                    <PublicRoute authed={this.state.authed} path='/goethe' component={Goethe} />
                    <Route render={() => <h3>No Match</h3>} />
                  </Switch>
              </div>
          </div>
        </Router>
      </div>
    )
  }
}
