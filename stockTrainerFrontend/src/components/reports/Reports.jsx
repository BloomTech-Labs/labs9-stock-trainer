import React from "react";
import { Header, Input, Tab, Placeholder, Segment } from "semantic-ui-react";
import "./Reports.css";
import Stock from "../stock/Stock";

const placeholderPane = (
  <Segment>
    <Tab.Pane>
      <Placeholder style={{ height: "30rem", width: "100%", maxWidth: "100%" }}>
        <Placeholder.Image />
      </Placeholder>
    </Tab.Pane>
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

const Reports = props => {
  console.log(props);
  return (
    <Segment className="reportsContainer">
      <Stock name="Stock name here" />
      <Input className="reportsSearch" placeholder="Search..." />
      <div className="rightInfobox">
        <Header as="h3">Target Score:</Header>
        <div className="targetScoreResult">15</div>
      </div>
      <Tab className="chart" panes={panes} />
    </Segment>
  );
};
export default Reports;
