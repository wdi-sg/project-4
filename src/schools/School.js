import React, { Component } from 'react'
import SchDescription from './SchDescription'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { ref } from '../fire'
import { school } from './schoolinfo'

export default class Schools extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviewsArr: [],
      name: this.props.match.params.name
    }
  }

  componentWillMount () {
    const { name } = this.state
    var reviews = ref.child('reviews/' + name)
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

    const { name } = this.state
    let building = null
    switch (name) {
      case 'goethe':
        building = require('../images/goethe.jpg')
        break
      case 'inlingua':
        building = require('../images/inlingua.jpg')
        break
    }
    return (
      <div>
        <div className='row'>
          <div className='col-xs-0 col-md-2'></div>
          <div className='col-xs-10 col-md-4'>
            <br />
            <img src={building} alt='building' />
          </div>
          <div className='col-xs-10 col-md-5'>
            <SchDescription info={school[name]} />
          </div>
          <div className='col-xs-0 col-md-1'></div>
        </div>

        <ReviewForm sch= {name} languages={school[name].languages} />
        { allReviews }
      </div>
    )
  }
}
