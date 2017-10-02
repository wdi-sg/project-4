import React, { Component } from 'react'
import './App.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { logout } from './authen/Auth'
import { firebaseAuth } from './fire'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
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
      <nav>
        <div className='container'>
          <Link to="/" className="navbar-brand" >Home</Link>{' '}
          <Link to="/contact" className="navbar-brand" >Contact</Link>{' '}

          {this.state.authed
            ? <button
            style={{border: 'none', background: 'transparent'}}
              onClick={() => { logout() }}
              className="navbar-brand">Logout</button>
              : <span>
              <Link to="/login" className="navbar-brand">Login</Link>{' '}
              <Link to="/register" className="navbar-brand">Register</Link>
              </span> }

              <DropdownButton className="navbar-brand" title='Languages' id='' style={{border: 'none', background: 'transparent'}}>
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
        </div>
      </nav>
    )
  }
}
