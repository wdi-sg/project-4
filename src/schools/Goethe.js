import React, { Component } from 'react'
import SchDescription from './SchDescription'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { ref } from '../fire'
import { school } from './schoolinfo'

export default class Goethe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviewArray: []
    }
    this.addReview = this.addReview.bind(this)
  }

  addReview () {
    var schReviews = ref.child('reviews/goethe')
    schReviews.on('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val()
        this.setState({ reviewArray: this.state.reviewArray.concat(childData) })
      })
    })
  }

  render () {
    var allReviews = this.state.reviewArray.map(function (q, index) {
      return <Review detail={q} />
    })
    return (
      <div className='container'>
        <SchDescription info={school.goethe} />
        <ReviewForm sch='goethe' languages={school.goethe.languages} />
        { allReviews }
      </div>
    )
  }
}
