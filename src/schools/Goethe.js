import React, { Component } from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default class Goethe extends Component {
  render () {
    return (
      <div className='container'>

        <ReviewForm />

        <ReviewList />
      </div>
    )
  }
}
