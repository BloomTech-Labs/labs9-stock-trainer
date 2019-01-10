import React from "react";
import {
  Header,
  Container,
  Icon,
  Input,
  Tab,
  Placeholder
} from "semantic-ui-react";
import "./Reports.css";

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
  <Container className="reportsContainer" fluid>
    <div className="titleRowReports">
      <Header as="h1">Stock Name</Header>
      <Icon name="star outline" size="big" />
      <Input className="reportsSearch" placeholder="Search..." />
    </div>
    <div className="infoRowReports">
      <div className="leftInfobox">
        <div className="leftColumnInfobox">
          <div className="upperRowInfobox">Price: $148.40</div>
          <div className="lowerRowInfobox">Volume: 43.28M</div>
        </div>
        <div className="rightColumnInfobox">
          <div className="upperRowInfobox">Change: 6.07</div>
          <div className="lowerRowInfobox">Change %: +4.27</div>
        </div>
      </div>
      <div className="rightInfobox">
        <Header as="h3">Target Score:</Header>
        <div className="targetScoreResult">15</div>
      </div>
    </div>
    <Tab panes={panes} />
  </Container>
);
export default Reports;
