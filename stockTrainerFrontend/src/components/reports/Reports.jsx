import React from "react";
import { Header, Icon, Input, Tab, Placeholder, Segment } from "semantic-ui-react";
import "./Reports.css";

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

const Reports = () => (
  <Segment className="reportsContainer">
    <Header className="stockName" as="h1">
      Stock Name
    </Header>
    <Icon className="favoriteIcon" name="star outline" size="big" />
    <Input className="reportsSearch" placeholder="Search..." />
    <div className="leftColumnInfobox">
      <div className="upperRowInfobox">Price: $148.40</div>
      <div className="lowerRowInfobox">Volume: 43.28M</div>
    </div>
    <div className="rightColumnInfobox">
      <div className="upperRowInfobox">Change: 6.07</div>
      <div className="lowerRowInfobox">Change %: +4.27</div>
    </div>
    <div className="rightInfobox">
      <Header as="h3">Target Score:</Header>
      <div className="targetScoreResult">15</div>
    </div>
    <Tab className="chart" panes={panes} />
  </Segment>
);
export default Reports;
