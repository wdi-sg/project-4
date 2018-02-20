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
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.numberOfDays !== this.state.numberOfDays) {
      this.setState({ days: nextProps.numberOfDays });
    }
  }




  // Sets the active tab upon clicking
  toggle = async (tab) => {
    if (this.state.activeTab !== tab) {
      await this.setState({
        activeTab: tab
      });
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
      return (
        <TabPane tabId={props.tabId}>
          <Row>
            <Col sm="12">
              <DayTable data={props}/>
            </Col>
          </Row>
        </TabPane>
      )
    }

    // Generates tabs for every day in the trip
    const dayTabs = this.state.days.map(day => <DayTab key={`day-tab-${day}`} activeTab={this.state.activeTab} tabId={day}/>)
    // Generates tab panes for every day in the trip
    const dayPanes = this.state.days.map(day => <DayPane key={`day-pane-${day}`} tabId={day}/>)

    return (
      <div>
        <Card>
          <CardHeader>
            <Nav tabs fill className="card-header-tabs">
              {dayTabs}
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              {dayPanes}
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
