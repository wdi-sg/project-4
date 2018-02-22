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
    let locationAll = this.props.locations
    let locationSort = locationAll.reverse()
    let locationList = locationSort.map((location, i) => <tr
      key={location._id}
      id={location._id}
      index={i}
      name={location.locationName} >
      <td>
        <Button outline color="danger" size="sm" onClick={() => this.props.onDelete(location._id)}><FontAwesome name='times' /> </Button>{' '}
      </td>
      <td>
        {location.locationName}<br />
        <small>{location.locationAddress}</small>

        <Button className="d-block" color="primary" size="sm" onClick={(e) => this.props.onAdd({
          locationName: location.locationName,
          locationAddress: location.locationAddress
        })}>
          Add to Itinerary
        </Button>{' '}
      </td>
    </tr>)

    return (
      <div className="locationDiv">
        <div className="locationHeader">
          <h5><FontAwesome name='map-marker' /> Saved Locations</h5>
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
