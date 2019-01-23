import React from "react";
import { Button, Input, Tab, Segment } from "semantic-ui-react";
import "./Reports.css";
import Stock from "../stock/Stock";

const today = new Date().toISOString().substr(0, 10);

const placeholderPane = (
  <Segment className="chartArea">
    <Tab.Pane>Placeholder image</Tab.Pane>
  </Segment>
);
const panes = [
  {
    menuItem: "Price",
    render: () => placeholderPane
  },
  {
    menuItem: "Average True Range",
    render: () => placeholderPane
  },
  {
    menuItem: "Volumn Weighted Average",
    render: () => placeholderPane
  },
  {
    menuItem: "Moving Average Convergence",
    render: () => placeholderPane
  },
  {
    menuItem: "Moving Average",
    render: () => placeholderPane
  }
];

export default class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  findData = () => {};

  render() {
    return (
      <Segment className="reportsContainer">
        <Stock big symbol="test" name="Stock name here" />
        <Input className="reportsSearch" placeholder="Search..." />
        <div id="from" className="dateSelect">
          <h3>From:</h3>
          <Input
            className="reportDateInput"
            max={today}
            type="date"
            value={today}
          />
        </div>
        <div id="to" className="dateSelect">
          <h3>To:</h3>
          <Input
            className="reportDateInput"
            value={today}
            max={today}
            type="date"
          />
        </div>

        <Button className="searchButton" size="massive" secondary>
          Search
        </Button>
        <Tab className="chart" panes={panes} />
      </Segment>
    );
  }
}
