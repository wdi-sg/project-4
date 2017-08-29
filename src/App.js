import React, { Component } from 'react'
import Home from './Home'
import German from './languages/German'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Home></Home>
        <German></German>
      </div>
    )
  }
}

export default App
