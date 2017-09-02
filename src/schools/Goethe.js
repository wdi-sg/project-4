import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'

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
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }
  handleChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <div className='container'>
        <div>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Name"
          /><br />
          <SelectField
            floatingLabelText='Language'
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText='German' />
          </SelectField><br />
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>10</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <TextField
            hintText="Message Field"
            floatingLabelText="Your Review"
            multiLine={true}
            fullWidth={true}
            rows={2}
          />
        </div>


        <List>
          <Subheader>Reviews</Subheader>
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText="Brendan Lim"
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            rightIconButton={rightIconMenu}
            primaryText="me, Scott, Jennifer"
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
