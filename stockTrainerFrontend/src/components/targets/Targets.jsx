import React from "react";
import { Tab, Placeholder, Container } from "semantic-ui-react";
import "./Targets.css";

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

const Targets = () => (
  <Container className="targetsContainer" fluid>
    <Tab panes={panes} />
  </Container>
);

export default Targets;
