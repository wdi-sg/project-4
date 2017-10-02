import React, { Component } from 'react'
import SchDescription from './SchDescription'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { ref } from '../fire'
import { school } from './schoolinfo'
import building from '../images/goethe.jpg'

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

  render () {
    var allReviews = this.state.reviewsArr.map(function (q, index) {
      return <Review detail={q} key={index} />
    })

    return (
      <div>
        <div className="row">
          <div className="col-xs-0 col-md-2"></div>
          <div className="col-xs-10 col-md-4">
            <br />
            <img src={building} alt='building' />
          </div>
          <div className="col-xs-10 col-md-5">
            <SchDescription info={school.goethe} />
          </div>
          <div className="col-xs-0 col-md-1"></div>
        </div>

        <ReviewForm sch='goethe' languages={school.goethe.languages} />
        { allReviews }
      </div>
    )
  }
}
