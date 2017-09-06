import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400, darkBlack} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import {yellow500} from 'material-ui/styles/colors'
import German from '../images/SpeechGerman.png'
import English from '../images/SpeechEnglish.png'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip='more'
    tooltipPosition='bottom-left' >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

// const rightIconMenu = (
//   <IconMenu iconButtonElement={iconButtonElement}>
//     <MenuItem>Edit</MenuItem>
//     <MenuItem>Delete</MenuItem>
//   </IconMenu>
// )

const styles = {
  userSelect: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  borderRadius: 0,
  height: 40,
  width: 40,
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

        <List>
          <ListItem
            // rightIconButton={rightIconMenu}
            leftAvatar={pic}
            primaryText={
              <p style='fontSize: 24px'>
                {this.props.detail.name}
              </p>
            }
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Rating: {this.props.detail.rating}</span> <br />
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
