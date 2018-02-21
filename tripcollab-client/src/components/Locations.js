import React, { Component } from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';

class Locations extends Component {
  render() {

    console.log(this.props)

    let locationAll = this.props.locations

    let locationList = locationAll.map((location, i) => <tr
      key={location._id}
      id={location._id}
      index={i}
      name={location.locationName} >
      <td>
        {location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude}
      </td>
      <td>
        <Button color="primary" size="sm">Add to Itinerary</Button>{' '}
      </td>
      <td>
        <Button outline color="danger" size="sm" onClick={() => this.props.onDelete(location._id)}>Remove Location</Button>{' '}
      </td>
    </tr>)

    return (
      <div className="locationDiv">
        <div className="locationHeader">Locations</div>
        <Table responsive>
          <tbody>

            { locationList }

          </tbody>
        </Table>
      </div>
    );
  }

}

export default Locations;
