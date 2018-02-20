import React, { Component } from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';

class Locations extends Component {

  render() {
    console.log(this.props)

    let locationAll = this.props.locations

    let locationList = locationAll.map((location, i) => <p key={location.locationID} id={location._id} index={i} name={location.locationName} >{location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude}</p>)

    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>
                Location Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* Dummy text */}
                { locationList }
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

}

export default Locations;
