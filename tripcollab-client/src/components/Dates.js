import React, { Component } from 'react';
import {
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';
import '../styles/App.css'


class Dates extends Component {
constructor() {
  super()
  this.state = {
    startDate: '',
    endDate: '',
  }
}

setDate() {
  console.log(this.state.startDate)
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


  render() {
    return (
      <div>
        <div className="dates">
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input type="date" name="startDate" id="startDate" placeholder="Start Date" onChange={this.handleStart}/>
          </FormGroup>
        </div>

        <div>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input type="date" name="endDate" id="endDate" placeholder="End Date" onChange={this.handleEnd}/>
          </FormGroup>
        </div>
      </div>
    );
  }

}

export default Dates;
