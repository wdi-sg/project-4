import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import French from './French'
import {
  BrowserRouter as Router,
  Route, Link
  } from 'react-router-dom'
import Germanpic from '../images/German.png'

export default class German extends Component {
  render () {
    return (
      <div>
        <Image src={Germanpic} responsive />
        <Link to='/french'>French</Link>
      </div>
    )
  }
}
