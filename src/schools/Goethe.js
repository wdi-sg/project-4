import React, { Component } from 'react'
import SchDescription from './SchDescription'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { ref } from '../fire'

const goethe = {
  name: 'Goethe Institut',
  description: 'The Goethe-Institut is the Federal Republic of Germany’s cultural institute, active worldwide.',
  location: '136 Neil Road, 088865',
  trainStation: 'Outram Park',
  skillsfuture: 'No',
  materials: 'https://www.cornelsen.de/studio_21/',
  link: 'https://www.goethe.de/ins/sg/en/spr/kur/gia.html',
  schedule: {
    extensive: {
      length: '10 weeks',
      frequency: 'Once a week',
      cost: 'S$520'
    },
    intensive: {
      length: '2 weeks',
      frequency: 'Monday to Friday',
      cost: 'S$720'
    }
  }
}

const goetheLanguages = ['German']

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
        <SchDescription info={goethe} />
        <ReviewForm sch='goethe' languages={goetheLanguages} />
        { allReviews }
      </div>
    )
  }
}
