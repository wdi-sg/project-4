import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Container, Row, Col,  Button} from 'reactstrap';
// import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import '../styles/App.css';


class Home extends Component {
  render() {
    return (
      <div>
        <h1 class="logo text-center">TripCollab</h1>
        <h2 class="main-text">Welcome!</h2>
        <h3 class="main-text">TripCollab can help to plan trip with your Friends</h3>
        <Container id="back-panel">
          <Row className="text-center">
            <Col xs={12} sm={3}>
              <img src="assets/planning.svg" className="image-icon"/>
              <h4 class="icon-header">Easy Trip Planning</h4>
              <p>Able to quickly create and arrange itinerary.</p>
            </Col>

            <Col xs={12} sm={3}>
              <img src="assets/calendar.svg" className="image-icon"/>
              <h4 class="icon-header">Personalised Itinerary</h4>
              <p>Lorem ipsum dolor sit ame adipiscing elit.</p>
            </Col>

            <Col xs={12} sm={3}>
              <img src="assets/add-contact.svg" className="image-icon"/>
              <h4 class="icon-header">Seamless Collaboration</h4>
              <p>Lorem ipsum dolor sit ame adipiscing elit.</p>
            </Col>

            <Col xs={12} sm={3}>
              <img src="assets/offline.svg" className="image-icon"/>
              <h4 class="icon-header">Offline Access</h4>
              <p>Lorem ipsum dolor sit ame adipiscing elit..</p>
            </Col>
          </Row>
        </Container>

      <Row>
        <Col className="">
        <Link to="/Itinerary">
          <Button className="text-center primary">Go</Button>
        </Link>
      </Col>
      </Row>
        <footer className='navbar-fixed-bottom'>
          <p>Copyright © 2018 <a href='https://github.com/chongct/project-4'><strong>TripCollab</strong></a>. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
}
export default Home
