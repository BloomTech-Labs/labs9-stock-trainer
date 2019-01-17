import React from "react";
import { Header, Tab, Placeholder } from "semantic-ui-react";
import "./Reports.css";
import Stock from "../stock/Stock";

const placeholderPane = (
  <Tab.Pane>
    <Placeholder style={{ height: "30rem", width: "100%", maxWidth: "100%" }}>
      <Placeholder.Image />
    </Placeholder>
  </Tab.Pane>
);
const panes = [
  {
    menuItem: "Price",
    render: () => placeholderPane
  },
  {
    menuItem: "Average Trie Range",
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
  <div className="reportsContainer">
    <Stock />
    <div className="rightInfobox">
      <Header as="h3">Target Score:</Header>
      <div className="targetScoreResult">15</div>
    </div>
    <Tab className="chart" panes={panes} />
  </div>
);
export default Reports;
