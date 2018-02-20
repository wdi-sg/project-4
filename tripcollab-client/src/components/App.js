import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';
import '../styles/App.css'

import Locations from './Locations'
import Dates from './Dates'
import Itinerary from './Itinerary'
import PlacesWithStandaloneSearchBox from './SearchBox';
import logo from '../icon.png'
// import Alternative from './Alternative'

class App extends Component {
  render() {
    return (
      <div  >
        <Col className="header">
          <img src={logo} class="logo"/>
          <div class="title">TripCollab</div>
        </Col>

        <Container>
          <Row>
            <Col className="col-7">
              <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
            </Col>
            <Col className="col-5">
              <Dates/>
              <Locations/>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Itinerary/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
