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
import Itinerary from './Itinerary'
import PlacesWithStandaloneSearchBox from './SearchBox';
// import Alternative from './Alternative'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <FormGroup className="md-4">
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="md-4">
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-8">
              <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
            </Col>
            <Col className="col-4">
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
