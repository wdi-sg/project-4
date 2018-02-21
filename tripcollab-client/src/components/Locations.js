import React, { Component } from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';
import '../styles/App.css'
import FontAwesome from 'react-fontawesome'

class Locations extends Component {

  render() {
    console.log(this.props)

    let locationAll = this.props.locations

    let locationList = locationAll.map((location, i) => <tr
      key={location.locationID}
      id={location._id}
      index={i}
      name={location.locationName} >
      <td>
        <Button outline size="sm"><FontAwesome name='times' size='1x' /> </Button>{' '}
      </td>
      <td>
        {location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude}
      </td>
      <td>
        <Button color="primary" size="sm">Add to Itinerary</Button>{' '}
      </td>

    </tr>)

    return (
      <div className="locationDiv">
        <div className="locationHeader">
          <h5><FontAwesome name='map-marker' size='1x' /> Saved Locations</h5>
        </div>
        <div className="locationBody">
          <Table responsive>
            <tbody>
              { locationList }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

}

export default Locations;
