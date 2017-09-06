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
      reviewsArr: []
    }
  }

  componentWillMount () {
    var reviews = ref.child('reviews/goethe')
    reviews.on('child_added', (dataSnapshot) => {
      this.setState({
        reviewsArr: this.state.reviewsArr.concat(dataSnapshot.val())
      })
    })
  }

  componentWillUnmount () {
    this.ref.off()
  }

  render () {
    var allReviews = this.state.reviewsArr.map(function (q, index) {
      return <Review detail={q} key={index} />
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
