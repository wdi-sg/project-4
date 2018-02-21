import React, { Component } from 'react';
import {
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';
import '../styles/App.css'


class Dates extends Component {

  render() {
    return (
      <div>
        <div className="dates">
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input type="date" name="startDate" id="startDate" placeholder="Start Date" />
          </FormGroup>
        </div>

        <div>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input type="date" name="endDate" id="endDate" placeholder="End Date" />
          </FormGroup>
        </div>
      </div>
    );
  }

}

export default Dates;
