import React, { Component } from 'react'
import { Image } from 'react-router-dom'
import './App.css'
import Nav from './navbar'
import Chalkboard from './images/Chalkboard.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
