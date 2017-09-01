import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import Germanpic from '../images/German.png'

export default class German extends Component {
  render () {
    return (
      <div>
        <Image src={Germanpic} responsive />
      </div>
    )
  }
}
