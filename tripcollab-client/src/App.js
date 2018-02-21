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
    let response = await fetch('/api/location/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };

  retrieveFromList = async () => {
    const response = await fetch('/api/location/getAllForTrip');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ locationList: body });
  };

  componentDidMount() {
    this.retrieveFromList();
  }

  // Event creation Test

  addToEvent = async (e, req) => {

    // write to Express server
    var params = {
      location_id: e.target.parentNode.id
      // trip_id: req.params.id,
      // name: this.state.locationList[e.target]
    };
    console.log(params);
    let response = await fetch('/event/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };

  // End of Event Creation Test

  // Update Event Test
  updateEvent = async (e, req) => {

    // write to Express server
    var params = {
      // eventID: e.target.parentNode.id,
      description: 'Testing123',
      // Mock data to represent event ID
      id: '5a8bcdd420581688a8dcf1bf'
      // locationID: '5a8b8f5ec4e9267e17d6a63c'
      // trip_id: req.params.id,
      // name: this.state.locationList[e.target]
    };
    // console.log(e.target.parentNode)
    console.log(params);
    let response = await fetch(`/event/update/${params.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };
  // End of Update Event Test

  // Delete Event Test
  deleteEvent = async (e, req) => {

    // write to Express server
    var params = {
      // Mock data to represent event ID
      id: '5a8be2f709de0d8cbd9d2ece'
    };
    // console.log(e.target.parentNode)
    console.log(params);
    let response = await fetch(`/event/delete/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };
  // End of Delete Event Test
  render() {
    let locationList = this.state.locationList.map((location, i) => <p key={location.locationID} id={location._id} index={i} name={location.locationName} >{location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude} <button onClick={this.addToEvent}>Create</button><button onClick={this.updateEvent}>Update</button><button onClick={this.deleteEvent}>Delete</button></p>)
    console.log(locationList)
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
