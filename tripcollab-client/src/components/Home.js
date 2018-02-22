import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Form
} from 'reactstrap';
import '../styles/Home.css';

import App from './App'

// User type in where he want to go
// User clicks on Go
// Go should get a new trip ID
// App will get the place user wants to go
// App will load App.js
// App grab the new trip ID
// App will push trip ID into address bar and in the `Share URL`

class Home extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      tripID: ''
    }
  }

  loadNewTrip = async () => {
    const response = await fetch('/trip/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"Pad Thai": "Yanjie don't puke"})
    })
    const body = await response.json()
    document.getElementById('HomePage').style.display = "none"
    console.log(body.url)
    // this.setState({
    //   tripID: body.url
    // })
    console.log(this)
    this.props.history.push(`/trip/${body.url}`)
  }

  render() {
    return (
        <div id="HomePage">
          <Container>
            <h1 className="logo text-center">TripCollab</h1>
            <Row>
              <Col>
                <h3 className="main-text text-center">Plan a trip with your friends now!</h3>
              </Col>
            </Row>
          </Container>

          <Container id="text-field-container" className="d-flex justify-content-center align-items-center">
              <InputGroup id="destination-field">
                <Input placeholder="Where are you going to?"/>
                <InputGroupAddon addonType="append">
                    <Button id="go-button" color="primary" onClick={this.loadNewTrip} >Go!</Button>
                </InputGroupAddon>
              </InputGroup>
          </Container>

          <Container fluid id="back-panel">
            <Row className="text-center">
              <Col xs={6} sm={3}>
                <img src="assets/planning.svg" alt="planner-icon" className="image-icon"/>
                <h4 className="icon-header">Easy Trip Planning</h4>
                <p className="panel-text">Able to quickly create and arrange itinerary.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="assets/calendar.svg" className="image-icon" alt="calendar icon"/>
                <h4 className="icon-header">Personalised Itinerary</h4>
                <p className="panel-text">Able to customise itinerary.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="assets/add-contact.svg" alt="add contact icon" className="image-icon"/>
                <h4 className="icon-header">Seamless Collaboration</h4>
                <p className="panel-text">Able to share itinerary with friends.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="assets/offline.svg" alt="no Wi-Fi icon" className="image-icon"/>
                <h4 className="icon-header">Offline Access</h4>
                <p className="panel-text">View itinerary even in remote locations.</p>
              </Col>
            </Row>
          </Container>

          <footer className="text-center text-light">
            <p>Copyright © 2018 <a id="github" href='https://github.com/chongct/project-4'><strong>TripCollab</strong></a>. All Rights Reserved.</p>
          </footer>
        </div>
    )
  }
}
export default Home
