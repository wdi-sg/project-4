import React from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';
// import classnames from 'classnames';

export default class DayTable extends React.Component {
  // console.log(props)
  constructor(props){
    super(props)
  }

  render() {

    let currentDayEvents = this.props.events
    let displayEvents = currentDayEvents.map((event, i) =>
      <tr key={event._id}>
        <td className="px-2">{i+1}</td>
        <td className="px-2"><input className="form-control" type="time" value={event.time} /></td>
        <td>{event.locationID}</td>
        <td>{event.address}</td>
        <td><input type="text" defaultValue={event.description} ref={i+1} /></td>
        <td><button
          onClick={() => this.props.onAdd({
            id: event._id,
            time: event.time,
            description: this.refs.{test}
          })}>
          Update
        </button></td>
        <td><button>Delete</button></td>
      </tr>
    )
    return (
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <Table hover size="sm">
              <thead className="thead-dark">
                <tr>
                  <th className="px-2">#</th>
                  <th className="px-2">Time</th>
                  <th>Name</th>
                  <th>Address</th>
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

// export default DayTable;
