import React, { Component } from 'react';
import {
  Input,
  Label,
  Row,
  Col,
  Form,
  FormGroup
} from 'reactstrap';
import '../styles/App.css'
import FontAwesome from 'react-fontawesome'

class Dates extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col className="dates">
            <FormGroup>
              <FontAwesome name='calendar' size='1x' />
              <Label for="startDate">&nbsp;Start Date</Label>
              <Input type="date" name="startDate" id="startDate" placeholder="Start Date" />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <FontAwesome name='calendar' size='1x' />
              <Label for="endDate">&nbsp;End Date</Label>
              <Input type="date" name="endDate" id="endDate" placeholder="End Date" />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Dates;
