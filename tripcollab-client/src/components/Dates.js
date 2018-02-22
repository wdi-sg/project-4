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
    startDate: '2018-02-21',
    endDate: '2018-02-23',
  }
}

componentDidMount() {
  this.setDate()
}

setDate() {
  let {startDate, endDate} = this.state
  if (startDate !== '' & endDate !== '') {
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    let d1 = new Date(startDate);
    let d2 = new Date(endDate);

    let d3 = d2.getTime() - d1.getTime()
    let diffDays = d3 / oneDay
    if (diffDays >= 0) {
      this.props.getNumberOfDays(diffDays + 1)
    }
    // this.setState({numberOfDays: diffDays + 1})
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

  componentDidMount () {
    this.setDate()
    this.setInitialStartDate()
  }

  setInitialStartDate = () => {
    let newStartDate = new Date()
    let newDay = newStartDate.getDate()
    let newMonth = newStartDate.getMonth() + 1
    let newYear = newStartDate.getFullYear()
    let formattedDate = `${newYear}-${newMonth}-${newDay}`

    // let newEndDate = newStartDate
    console.log(formattedDate)
  }

  render() {
    return (
      <div className="dates">
        <Row>
          <Col>
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label className="dateLabels" for="startDate">&nbsp;Trip Start Date</Label>
              <Input type="date" name="startDate" id="startDate" defaultValue={this.state.startDate} onChange={this.handleStart} />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <FontAwesome name='calendar' />
              <Label className="dateLabels" for="endDate">&nbsp;Trip End Date</Label>
              <Input type="date" name="endDate" id="endDate" defaultValue={this.state.endDate} onChange={this.handleEnd} />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dates;
