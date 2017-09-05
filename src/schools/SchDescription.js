import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'

const iconStyles = {
  marginRight: 24
}

export default class SchDescription extends Component {
  render () {
    return (
      <div className='form'>
        <div className='line'>
          <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
          <p>{this.props.info.name}</p>
        </div>
      </div>
    )
  }
}
