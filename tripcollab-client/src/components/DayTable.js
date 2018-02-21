import React from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';
// import classnames from 'classnames';

<<<<<<< HEAD
const DayTable = (props) => {
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
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2">1</td>
                <td className="px-2">12:00pm</td>
                <td>Victoria Market</td>
                <td>Queen Street, Melbourne VIC, Australia</td>
              </tr>
              <tr>
                <td className="px-2">2</td>
                <td className="px-2">2:00pm</td>
                <td>Moonlight Cinema Sydney</td>
                <td>Paddington NSW, Australia</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </TabPane>
  )
=======
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
        <td className="px-2"><input className="form-control" type="time" value={event.time} ref={i*10} /></td>
        <td>{event.locationID}</td>
        <td>{event.address}</td>
        <td><input type="text" defaultValue={event.description} ref={i+1} /></td>
        <td><button
          onClick={() => this.props.onAdd({
            id: event._id,
            time: this.refs[i*10].value,
            description: this.refs[i+1].value
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
>>>>>>> a8c1715458227a7c16c1dfd52ae359382524984c
}

// export default DayTable;
