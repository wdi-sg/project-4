// ############### React ###############
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

// ############### Components ###############
import Locations from './Locations'
import Dates from './Dates'
import Itinerary from './Itinerary'
import PlacesWithStandaloneSearchBox from './SearchBox';

// ############### Styling ###############
import '../styles/App.css'
import FontAwesome from 'react-fontawesome'
// import logo from '../icon.png'

class App extends Component {

  // ========== Constructors ==========
  constructor() {
    super();
    this.state = {
      locationList: [],
      numberOfDays: [1],
      activeTab: 1,
      itineraryList: [],
      currentDayItinerary: []
    };
  }

  // Test Code
  // ========== adding location to list ==========
  addToList = async ({ place_id, formatted_address, name, geometry: { location } }) => {
    // display on React client
    // var node = document.createElement("LI");
    // var textnode = document.createTextNode(`${name}, ${formatted_address} at ${location.lat()}, ${location.lng()}`);
    // node.appendChild(textnode);
    // document.getElementById("locationList").appendChild(node);

    // write to Express server
    var params = {
      id: place_id,
      name: name,
      address: formatted_address,
      latitude: location.lat(),
      longitude: location.lng(),
      tripID: "5a8e88c81e15aed8297de7a3" // just an example
    }
    const response = await fetch('/location/new/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    const body = await response.json()
    console.log(body)
    this.setState({ locationList: body })
  }

  // ========== fetching from db the itineray list ==========
  getItineraryList = async () => {
    const response = await fetch('/event/view');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ itineraryList: body });

    this.setState({
      currentDayItinerary: this.state.itineraryList.filter(event => event.date === this.state.activeTab)
    })
  }

  // ========== fetching from db the location list ==========
  retrieveFromList = async () => {
    const response = await fetch('/location/getAllForTrip');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ locationList: body });
  };

  // ========== deleting location from list ==========
  deleteFromList = async (id) => {
    const response = await fetch(`/location/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const body = await response.json()
    this.setState({ locationList: body })
  }

  // ========== mounting of component ==========
  componentDidMount() {
    this.retrieveFromList()
    this.getItineraryList()
  }

  // ========== setting state for activeTab and currentDayItinerary ==========
  getActiveTab = async (data) => {
    await this.setState({activeTab: data})

    await this.setState({
      currentDayItinerary: this.state.itineraryList.filter(event => event.date === this.state.activeTab)
    })
  }

  // Event creation Test

  addToEvent = async (req) => {

    // write to Express server
    var params = {
      locationName: req.locationName,
      locationAddress: req.locationAddress,
      time: "00:00",
      date: this.state.activeTab,
      tripID: '5a8e88c81e15aed8297de7a3'
    };
    let response = await fetch('/event/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    this.getItineraryList()
  };

  // End of Event Creation Test

  // Update Event Test
  // ========== updating of event ==========
  updateEvent = async (req) => {

    // write to Express server
    var params = {
      description: req.description,
      id: req.id,
      time: req.time
    };
    let response = await fetch(`/event/update/${params.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    this.getItineraryList()
  };
  // End of Update Event Test

  // Delete Event Test
  // ========== deleting event from the db ==========
  deleteEvent = async (req) => {
    // write to Express server
    var params = {
      id: req
    };

    let response = await fetch(`/event/delete/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    this.getItineraryList()
  };

  // End of Test Code

  // get the number of days from dates

  getNumberOfDays = (props) => {
    let days = Array(props).fill().map((_,i) => i + 1)
    // console.log(days.length)
    if (days.length > 30) {
      this.setState({numberOfDays: days.slice(0, 30)})
      alert(`You have exceeded the max length of 30 days.`)
    } else {
      this.setState({numberOfDays: days})
    }
  }

  render() {

    let newStartDate = new Date()
    let newStartDay = ("0" + newStartDate.getDate()).slice(-2)
    let newStartMonth =("0" + (newStartDate.getMonth() + 1)).slice(-2)
    let newStartYear = newStartDate.getFullYear()
    let formattedStartDate = `${newStartYear}-${newStartMonth}-${newStartDay}`

    let newEndDate = new Date()
    newEndDate.setDate(newEndDate.getDate() + 1)
    let newEndDay = ("0" + newEndDate.getDate()).slice(-2)
    let newEndMonth = ("0" + (newEndDate.getMonth() + 1)).slice(-2)
    let newEndYear = newEndDate.getFullYear()
    let formattedEndDate = `${newEndYear}-${newEndMonth}-${newEndDay}`

    return (
      <div className="main" id="main">
        <Container className="fpContainer">
          <Row className="header">
            <Col className="col-7">
              <span>
                <img src="/assets/icon.png" className="logo"/>
                <span className="title">TripCollab</span>
              </span>
            </Col>

            <Col className="col-5 headerRight">
              <div>

                <p className="sharePromptText">
                  Share this link with your friends!
                </p>

                <label><FontAwesome name='link' />&nbsp;</label>
                <input type="input" name="shareLink" id="shareLink" defaultValue="tripcollab.com/asdf1234asd123" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-7">
              <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
            </Col>
            <Col className="col-5">
              <Locations
                locations={this.state.locationList}
                onAdd={this.addToEvent}
                onDelete={this.deleteFromList}/>
              </Col>
            </Row>

            <Row>
              <Col>
                <Dates getNumberOfDays={this.getNumberOfDays}/>
              </Col>
            </Row>

            <Row>
              <Col>
                <Itinerary numberOfDays={this.state.numberOfDays} getActiveTab={this.getActiveTab} activeTab={this.state.activeTab} itineraryList={this.state.currentDayItinerary}
                  updateMethod={this.updateEvent}
                  deleteMethod={this.deleteEvent}
                />
              </Col>
            </Row>

            <Row className="footer">
              <Col className="col-12">
                <div>
                  <a href="https://github.com/chongct/project-4" target="_blank">
                  <FontAwesome name='github' size='2x' />
                  &nbsp;Visit our Github!
                </a>
                <p>
                  © WDI-13-SG <br/>
                  <a href="#main">Back to the Top</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
