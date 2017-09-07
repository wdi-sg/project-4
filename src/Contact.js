import React, { Component } from 'react'
import { ref } from './fire'
import Snackbar from 'material-ui/Snackbar'

function saveContact (name, email, subject, feedback) {
  return ref.child('contact/')
    .push({
      name: name,
      email: email,
      subject: subject,
      feedback: feedback
    })
}

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false // to open the snackbar after submission
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    saveContact(this.name.value, this.email.value, this.subject.value, this.feedback.value)
    this.setState({
      open: true
    })
    // clear all the fields after submission
    this.name.value = ''
    this.email.value = ''
    this.subject.value = ''
    this.feedback.value = ''
  }

  // to manually close the snackbar
  handleRequestClose (event) {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <h2>Contact Us</h2>
          <br />
          <div className='form-row'>
            <div className='form-group col-xs-6'>
              <label>Name</label>
              <input className='form-control' ref={(name) => this.name = name} placeholder='Your name' />
            </div>
            <div className='form-group col-xs-6'>
              <label>Email</label>
              <input className='form-control' ref={(email) => this.email = email} placeholder='Your email' />
            </div>
          </div>
          <div className='form-group'>
            <label>Subject</label>
            <select className="form-control" ref={(subject) => this.subject = subject} required >
              <option value="" disabled selected hidden>Please Choose...</option>
              <option> Add new school </option>
              <option> Update information on website </option>
              <option> Edit your review </option>
              <option> Found a bug </option>
              <option> Others </option>
            </select>
          </div>
          <div className='form-group'>
            <label>Feedback</label>
            <textarea className="form-control" placeholder="We appreciate your feedback and will get back to you as soon as possible" rows="4" ref={(feedback) => this.feedback = feedback} />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>

        <Snackbar
          open={this.state.open}
          message='Feedback submitted'
          autoHideDuration={4000}
          onRequestClose={event => this.handleRequestClose(event)}
        />
      </div>
    )
  }
}
