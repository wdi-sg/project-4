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
constructor() {
  super()
  this.state = {
    startDate: '',
    endDate: ''
  }
}

componentDidMount = async () => {
  await this.getDate()
  this.setDate()
}

getDate = async () => {
  const response = await fetch(`/trip/view/5a8e432c7b188780787fe1bd`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  const body = await response.json()
  console.log(body);
  let startDate = body.dateFrom.slice(0,10)
  let endDate = body.dateTo.slice(0,10)
  await this.setState({ startDate, endDate })
  console.log("Date", this.state.startDate, this.state.endDate);
}

setDate() {
  let {startDate, endDate} = this.state
  if (startDate !== '' && endDate !== '') {
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    let d1 = new Date(startDate);
    let d2 = new Date(endDate);

    let d3 = d2.getTime() - d1.getTime()
    let diffDays = d3 / oneDay
    if (diffDays >= 0) {
      this.props.getNumberOfDays(diffDays + 1)
    // this.setState({numberOfDays: diffDays + 1})
  }


}
}

  handleStart = async (e) => {
    await this.setState({startDate: e.target.value})
    this.setDate()
  }

  handleEnd = async (e) => {
    await this.setState({endDate: e.target.value})
    this.setDate()
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="dates">
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label for="startDate">&nbsp;Start Date</Label>
              <Input type="date" name="startDate" id="startDate" placeholder="Start Date" value={this.state.startDate} onChange={this.handleStart} />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label for="endDate">&nbsp;End Date</Label>
              <Input type="date" name="endDate" id="endDate" placeholder="End Date" value={this.state.endDate} onChange={this.handleEnd} />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dates;
