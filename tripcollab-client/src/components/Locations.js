import React, { Component } from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';

class Locations extends Component {

  render() {
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
                Dummy text
                {/* { locationName } */}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

}

export default Locations;
