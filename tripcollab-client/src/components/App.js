import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Itinerary from './Itinerary'
// import Alternative from './Alternative'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col>
              <Itinerary/>
            </Col>
          </Row>
          {/* <Row className="mt-5">
            <Col>
              <Alternative/>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default App;
