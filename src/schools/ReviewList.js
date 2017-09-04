import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {grey400, darkBlack} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ReviewForm from './ReviewForm'

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

export default class Goethe extends Component {
  render () {
    return (
      <div className='container'>

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
