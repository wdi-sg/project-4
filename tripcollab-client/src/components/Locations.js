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
      key={location._id}
      id={location._id}
      index={i}
      name={location.locationName} >
      <td>
        <Button outline color="danger" size="sm" onClick={() => this.props.onDelete(location._id)}><FontAwesome name='times' size='1x' /> </Button>{' '}
      </td>
      <td>
        {location.locationName}
        <Button color="primary" size="sm" onClick={this.props.addToEvent}>Add to Itinerary</Button>{' '}
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
