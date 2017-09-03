import React, { Component } from 'react'
import { ref } from '../fire'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {grey400, darkBlack} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import Rating from 'react-rating'
import starEmpty from '../images/star-empty.png'
import starFull from '../images/star-full.png'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left" >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
)

function saveReview (name, language, rating, review) {
  return ref.child('reviews/goethe/')
    .push({
      name: name,
      language: language,
      rating: rating,
      review: review
    })
}

export default class Goethe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rate: 0,
      open: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    saveReview(this.name.value, this.language.value, this.state.rate, this.review.value)
    this.setState({
      open: true
    })
  }

  handleRequestClose (event) {
    this.setState({
      open: false
    })
  }

  handleRate (rate, event) {
    this.setState({rate: rate})
  }

  render () {
    return (
      <div className='container'>

        <form className='form' onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-xs-6">
              <label>Name</label>
              <input className="form-control" ref={(name) => this.name = name} placeholder="Your name" />
            </div>
            <div className="form-group col-xs-6">
              <label>Language Taken</label>
              <select className="form-control" ref={(language) => this.language = language}>
                <option>German</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Rating</label><br />
            <Rating
              start= {0}
              stop={10}
              initialRate={this.state.rate}
              onClick={rate => this.handleRate(rate)}
              empty={<img src={starEmpty} className="icon" />}
              full={<img src={starFull} className="icon" />}
            />
          </div>
          <div className="form-group">
            <label>Review</label>
            <textarea className="form-control" placeholder="Review" rows="3" ref={(review) => this.review = review} />
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>

        <Snackbar
          open={this.state.open}
          message="Review submitted"
          autoHideDuration={4000}
          onRequestClose={event => this.handleRequestClose(event)}
        />



        <List>
          <Subheader>Reviews</Subheader>
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText="Brendan Lim"
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Language taken:  </span>
                <span style={{color: darkBlack}}>Rating:</span>
                <br />
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText="Jennifer"
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Summer BBQ</span><br />
                Wish I could come, but I&apos;m out of town this weekend.
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText="Grace Ng"
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Oui oui</span><br />
                Do you have any Paris recs? Have you ever been?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </List>
      </div>
    )
  }
}
