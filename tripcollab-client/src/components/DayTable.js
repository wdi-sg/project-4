import React from 'react';
import {
  TabPane,
  Row,
  Col,
  Table,
} from 'reactstrap';
// import classnames from 'classnames';

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
}

export default DayTable;
