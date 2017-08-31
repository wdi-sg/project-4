import React, { Component } from 'react'
import '../App.css'
import Germanic from './Germanic'
import EastAsian from './EastAsian'
import Romance from './Romance'
import MiddleEastern from './MiddleEastern'
import EastEuropean from './EastEuropean'
import SouthEastAsian from './SouthEastAsian'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Germanic />
        <EastAsian />
        <Romance />
        <MiddleEastern />
        <EastEuropean />
        <SouthEastAsian />
      </div>
    )
  }
}
