import React, { Component } from 'react'
import SchDescription from './SchDescription'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { ref } from '../fire'
import { school } from './schoolinfo'
import building from '../images/BuildingInlingua.jpg'

export default class Inlingua extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviewsArr: []
    }
  }

  componentWillMount () {
    var reviews = ref.child('reviews/inlingua')
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
            <img src={building} />
          </div>
          <div className="col-xs-10 col-md-5">
            <SchDescription info={school.inlingua} />
          </div>
          <div className="col-xs-0 col-md-1"></div>
        </div>

        <ReviewForm sch='inlingua' languages={school.inlingua.languages} />
        { allReviews }
      </div>
    )
  }
}
