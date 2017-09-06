import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400, darkBlack} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

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

export default class Review extends Component {
  render () {
    return (
      <div>

        <List>
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText={this.props.detail.name}
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Language taken: {this.props.detail.language} </span>
                <span style={{color: darkBlack}}>Rating: {this.props.detail.rating}</span>
                <br />
                {this.props.detail.review}
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
