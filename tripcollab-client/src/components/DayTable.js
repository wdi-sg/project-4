import React from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';

export default class DayTable extends React.Component {

  handleBlur = (e) => {
    e.preventDefault()
  }

  render () {

    let currentDayEvents = this.props.events
    let events = currentDayEvents.sort((a, b) => {
      return a.time.replace(/:/, '') - b.time.replace(/:/, '')
    })
    let displayEvents = events.map((event, i) =>
    <tr key={event._id}>
      {/* <td className="px-2">{i + 1}</td> */}

      <td><button
        onClick={() => this.props.onMinus(event._id)}>
        Delete
      </button></td>

      <td className="px-2"><input className="form-control" type="time" defaultValue={event.time} ref={i + "time"} onBlur={() => this.props.onAdd({
        id: event._id,
        time: this.refs[i + "time"].value,
        description: this.refs[i + "text"].value
      })}/></td>

      <td>{event.locationName}</td>

      <td>{event.locationAddress}</td>

      <td><textarea className="textarea" defaultValue={event.description} ref={i + "text"} onBlur={() => this.props.onAdd({
        id: event._id,
        time: this.refs[i + "time"].value,
        description: this.refs[i + "text"].value
      })}/></td>

    </tr>
  )
  return (
    <TabPane tabId="1">
      <Row>
        <Col>
          <Table hover size="sm" className="event">
            <thead className="thead-light">
              <tr className="col-12">
                <th className="event-content">Options</th>
                <th className="px-2 event-content">Time</th>
                <th className="event-content">Name</th>
                <th className="event-content">Address</th>
                <th className="event-des">Descriptions</th>
              </tr>
            </thead>
            <tbody>
              {displayEvents}
            </tbody>
          </Table>
        </Col>
      </Row>
    </TabPane>
  )
}
}
