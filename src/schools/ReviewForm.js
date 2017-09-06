import React, { Component } from 'react'
import { ref } from '../fire'
import Snackbar from 'material-ui/Snackbar'
import Rating from 'react-rating'
import starEmpty from '../images/star-empty.png'
import starFull from '../images/star-full.png'

function saveReview (name, language, rating, review, schName) {
  return ref.child('reviews/')
    .push({
      name: name,
      language: language,
      rating: rating,
      review: review
    })
}

export default class ReviewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rate: 0, // for the star rating
      open: false // to open the snackbar after submission
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    saveReview(this.name.value, this.language.value, this.state.rate, this.review.value, this.props.sch)
    this.setState({
      open: true
    })
    // clear all the fields after submission
    this.name.value = ''
    this.language.value = ''
    this.setState({
      rate: 0
    })
    this.review.value = ''
  }

  // to manually close the snackbar
  handleRequestClose (event) {
    this.setState({
      open: false
    })
  }

  // change the rate state upon clicking the stars
  handleRate (rate, event) {
    this.setState({rate: rate})
  }

  render () {
    var allLanguages = this.props.languages.map(function (value, i) {
      return (
        <option key={i} > {value} </option>
      )
    })

    return (
      <div className='container'>

        <form className='form' onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-xs-6'>
              <label>Name</label>
              <input className='form-control' ref={(name) => this.name = name} placeholder='Your name' />
            </div>
            <div className='form-group col-xs-6'>
              <label>Language Taken</label>
              <select className="form-control" ref={(language) => this.language = language}>
                { allLanguages }
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Rating</label><br />
            <Rating
              start={0}
              stop={10}
              initialRate={this.state.rate}
              onClick={rate => this.handleRate(rate)}
              empty={<img src={starEmpty} className="icon" alt='' />}
              full={<img src={starFull} className="icon" alt='' />}
            />
          </div>
          <div className='form-group'>
            <label>Review</label>
            <textarea className="form-control" placeholder="Review" rows="3" ref={(review) => this.review = review} />
          </div>
          <button type='submit' className='btn btn-primary'>Submit Review</button>
        </form>

        <Snackbar
          open={this.state.open}
          message='Review submitted'
          autoHideDuration={4000}
          onRequestClose={event => this.handleRequestClose(event)}
        />

      </div>
    )
  }
}
