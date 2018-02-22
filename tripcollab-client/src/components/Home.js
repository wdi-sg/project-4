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
import FontAwesome from 'react-fontawesome'

import '../styles/Home.css';
import App from './App'


class Home extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      tripID: '',
      logic : true
    }
  }

  componentDidMount() {
    if (this.props.location.pathname.includes('trip')) {
      this.setState({logic: false})
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
    this.setState({logic: false})
    this.props.history.push(`/trip/${body.url}`)
  }

  render() {
    const isShowHome = this.state.logic
    return (
      <div>
      { isShowHome && (
        <div id="HomePage">
          <Container>
            <h1 className="brand text-center">TripCollab</h1>
            <Row>
              <Col>
                <h3 className="main-text text-center">Plan a trip with your friends</h3>
              </Col>
            </Row>
          </Container>

          <Container id="text-field-container" className="d-flex justify-content-center align-items-center">
              <div id="destination-field">
                <Button id="go-button" size="lg" color="primary" onClick={this.loadNewTrip} block>Start now!</Button>
              </div>
          </Container>

          <Container fluid id="back-panel">
            <Row className="text-center">
              <Col xs={6} sm={3}>
                <img src="/assets/planning.svg" alt="planner-icon" className="image-icon"/>
                <h4 className="icon-header">Easy Trip Planning</h4>
                <p className="panel-text">Able to quickly create and arrange itinerary.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="/assets/calendar.svg" className="image-icon" alt="calendar icon"/>
                <h4 className="icon-header">Personalised Itinerary</h4>
                <p className="panel-text">Able to customise itinerary.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="/assets/add-contact.svg" alt="add contact icon" className="image-icon"/>
                <h4 className="icon-header">Seamless Collaboration</h4>
                <p className="panel-text">Able to share itinerary with friends.</p>
              </Col>

              <Col xs={6} sm={3}>
                <img src="/assets/offline.svg" alt="no Wi-Fi icon" className="image-icon"/>
                <h4 className="icon-header">Offline Access</h4>
                <p className="panel-text">View itinerary even in remote locations.</p>
              </Col>
            </Row>
          </Container>

          <footer className="text-center text-light">
            <p className="footer-text">Copyright © 2018 <strong>TripCollab by WDI’13</strong> <a id="github" href="https://github.com/chongct/project-4" target="_blank"><FontAwesome name='github' size='2x' /></a></p>
          </footer>
        </div>
      )
      }
    </div>
    )
  }
}
export default Home
