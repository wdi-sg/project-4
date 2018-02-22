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

// Get initial dates and set in constructor
// let newStartDate = new Date()
// let newStartDay = ("0" + newStartDate.getDate()).slice(-2)
// let newStartMonth =("0" + (newStartDate.getMonth() + 1)).slice(-2)
// let newStartYear = newStartDate.getFullYear()
// let formattedStartDate = `${newStartYear}-${newStartMonth}-${newStartDay}`
//
// let newEndDate = new Date()
// newEndDate.setDate(newEndDate.getDate() + 1)
// let newEndDay = ("0" + newEndDate.getDate()).slice(-2)
// let newEndMonth = ("0" + (newEndDate.getMonth() + 1)).slice(-2)
// let newEndYear = newEndDate.getFullYear()
// let formattedEndDate = `${newEndYear}-${newEndMonth}-${newEndDay}`

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
      <div className="dates">
        <Row>
          <Col>
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label className="dateLabels" for="startDate">&nbsp;Trip Start Date</Label>
              <Input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleStart} />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label className="dateLabels" for="endDate">&nbsp;Trip End Date</Label>
              <Input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleEnd} />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dates;
