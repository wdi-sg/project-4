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
    return (
      <div className="locationDiv">
        <div className="locationHeader">Locations</div>
        <Table responsive>
          <tbody>
            <tr>
              <td>
                Location Name
                {/* { locationName } */}
              </td>
              <td>
                <Button color="primary" size="sm">Add to Itinerary</Button>{' '}
              </td>
              <td>
                <Button outline color="danger" size="sm">Remove Location</Button>{' '}
              </td>
            </tr>

            <tr>
              <td>
                Location Name
                {/* { locationName } */}
              </td>
              <td>
                <Button color="primary" size="sm">Add to Itinerary</Button>{' '}
              </td>
              <td>
                <Button outline color="danger" size="sm">Remove Location</Button>{' '}
              </td>
            </tr>

          </tbody>
        </Table>
      </div>
    );
  }

}

export default Locations;
