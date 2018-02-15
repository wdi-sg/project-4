import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PlacesWithStandaloneSearchBox from './SearchBox';

class App extends Component {
  addToList = ({ place_id, formatted_address, name, geometry: { location } }) => {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`${name}, ${formatted_address} at ${location.lat()}, ${location.lng()}`);
    node.appendChild(textnode);
    document.getElementById("locationList").appendChild(node);
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
        <ol id="locationList"></ol>
      </div>
    );
  }
}

export default App;
