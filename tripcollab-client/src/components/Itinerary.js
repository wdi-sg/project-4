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
  CardBody
} from 'reactstrap';
import classnames from 'classnames';

import DayTable from './DayTable';
export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
  }

  // Sets the active tab upon clicking
  toggle = (tab) => {
    if (this.props.activeTab !== tab) {
      this.props.getActiveTab(tab)
    }
  }

  render() {
    // Creates a tab for each day in the trip which when selected will toggle the respective day in the tab pane
    let { itineraryList } = this.props

    const DayTab = (props) => {
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
              <DayTable data={props} events={itineraryList} onAdd={this.props.updateMethod}
              onMinus={this.props.deleteMethod} />
            </Col>
          </Row>
        </TabPane>
      )
    }

    // Generates tabs for every day in the trip
    const dayTabs = this.props.numberOfDays.map(day => <DayTab key={`day-tab-${day}`} activeTab={this.props.activeTab} tabId={day}/>)
    // Generates tab panes for every day in the trip
    const dayPanes = this.props.numberOfDays.map(day => <DayPane key={`day-pane-${day}`} tabId={day}/>)

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
