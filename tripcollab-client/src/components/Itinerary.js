import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  // Table,
  // CardTitle,
  // CardText,
  // Button,
} from 'reactstrap';
import classnames from 'classnames';

import DayTable from './DayTable';
// let days = 5;
export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      days: [1]
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("What is the nextProps", nextProps);
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.numberOfDays !== this.state.numberOfDays) {
      this.setState({ days: nextProps.numberOfDays });
    }
  }




  // Sets the active tab upon clicking
  toggle = (tab) => {
    if (this.props.activeTab !== tab) {
      // await this.setState({
      //   activeTab: tab
      // });
      console.log("This is the props activeTab", this.props.activeTab, tab);
      // setting the state of activeTab at App.js
      this.props.getActiveTab(tab)
    }
  }

  render() {
    // Creates a tab for each day in the trip which when selected will toggle the respective day in the tab pane
    const DayTab = (props) => {
      console.log('Toggled Day', props.activeTab)
      return(
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === props.tabId })}
            onClick={() => { this.toggle(props.tabId); }}
          >
            Day {props.tabId}
          </NavLink>
        </NavItem>
      )
    }

    // Creates a pane for each day in the trip which will be toggled when the respective day table is pressed
    const DayPane = (props) => {
      console.log("This is inside the props of DayPane", this.props.itineraryList);
      return (
        <TabPane tabId={props.tabId}>
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
                          <td>Something</td>
                        </tr>
                        <tr>
                          <td className="px-2">2</td>
                          <td className="px-2">2:00pm</td>
                          <td>Moonlight Cinema Sydney</td>
                          <td>Paddington NSW, Australia</td>
                          <td>Something</td>
                        </tr>
                      </tbody>
                      <DayTable data={props.data}/>
                    </Table>





            </Col>
          </Row>
        </TabPane>
      )
    }

    // Generates tabs for every day in the trip
    const dayTabs = this.state.days.map(day => <DayTab key={`day-tab-${day}`} activeTab={this.props.activeTab} tabId={day}/>)
    // Generates tab panes for every day in the trip
    // const dayPanes = this.state.days.map(day => <DayPane key={`day-pane-${day}`} tabId={day} data={data}/>)
    const dayPanes = this.props.itineraryList.map(item => <DayPane key={`day-pane-${item.date}`} tabId={item.date} data={item}/>)

// you get the list [{...}, {...}. {...}]
// so you loop through the array
// target each object element
// get the date value
// if date value same as day
// throw in that data




    return (
      <div>
        <Card>
          <CardHeader>
            <Nav tabs fill className="card-header-tabs">
              {dayTabs}
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.props.activeTab}>

              {dayPanes}

            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
