import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "./Stock.css";

const Stock = () => (
  <Segment className="stock">
    <Header as="h3">APPL</Header>
    <div className="info">
      <div>
        <p>Price: $148.40</p>
        <p>Volume: 43.28M</p>
      </div>
      <div>
        <p>Change: 6.07</p>
        <p>Change %: +4.27</p>
      </div>
    </div>
  </Segment>
);

export default Stock;
