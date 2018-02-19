import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PlacesWithStandaloneSearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locationList: []
    };
  }

  addToList = async ({ place_id, formatted_address, name, geometry: { location } }) => {
    // display on React client
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`${name}, ${formatted_address} at ${location.lat()}, ${location.lng()}`);
    node.appendChild(textnode);
    document.getElementById("locationList").appendChild(node);

    // write to Express server
    var params = {
      id: place_id,
      name: name,
      address: formatted_address,
      latitude: location.lat(),
      longitude: location.lng()
    };
    console.log(params);
    let response = await fetch('/location/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };

  retrieveFromList = async () => {
    const response = await fetch('/location/getAllForTrip');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ locationList: body });
  };

  componentDidMount() {
    this.retrieveFromList();
  }

  // Event creation Test

  handleClick = (e) => {
    console.log(e.target)
  }

  addToEvent = async (e, req) => {

    // write to Express server
    var params = {
      location_id: e.target.id,
      trip_id: req.params.id,
      name: e.target.name
    };
    console.log(params);
    // let response = await fetch('/event/new', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(params)
    // });
  };

  // End of Event Creation Test

  render() {
    let locationList = this.state.locationList.map(location => <p key={location.locationID} id={location.locationID} onClick={this.handleClick} name={location.locationName} >{location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude}</p>)

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

        {/* this section retrieves saved locations from MongoDB, data can be manipulated */}
        <h2>Previously Saved Locations</h2>
        { locationList }
      </div>
    );
  }
}

export default App;
