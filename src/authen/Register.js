import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { auth } from './Auth'

function setErrorMsg (error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      registerError: null,
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
    this.setState({ fireRedirect: true })
  }
  render () {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/'} />
        )}
      </div>
    )
  }
}
