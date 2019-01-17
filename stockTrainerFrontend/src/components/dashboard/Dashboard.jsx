import React from "react";
import { Segment, Input } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";
import Stock from "../stock/Stock";

const dummyData = [{ name: "Apple" }, { name: "Amazon" }];

const Dashboard = () => (
  <div className="gridContainer">
    <Segment>
      <Indicators />
    </Segment>
    <Segment className="leftColumn">
      <Input placeholder="Search..." className="stockSearch" />
      {dummyData.map(stock => (
        <div className="stockContainer" key={stock.name}>
          <Stock name={stock.name} />
        </div>
      ))}
    </Segment>
    <Segment className="userStocks">
      {dummyData.map(stock => (
        <div className="stockContainer" key={stock.name}>
          <Stock name={stock.name} />
        </div>
      ))}
    </Segment>
  </div>
);

export default Dashboard;
