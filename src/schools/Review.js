import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import German from '../images/SpeechGerman.png'
import English from '../images/SpeechEnglish.png'

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  height: 40,
  top: 16,
  left: 16
}

export default class Review extends Component {
  render () {
    var lang = this.props.detail.language

    if (lang === 'German') { var pic = <img src={German} style={styles} /> }
    if (lang === 'English') { var pic = <img src={English} style={styles} /> }

    return (
      <div>
        <div className='review'>
          <div className='left'> {pic} </div>
          <div className='right'>
            <p>
              <h4> {this.props.detail.name} </h4>
              <span>Rating: {this.props.detail.rating}</span> <br />
              {this.props.detail.review}
            </p>
          </div>
        </div>
        <Divider inset={true} />
      </div>
    )
  }
}
