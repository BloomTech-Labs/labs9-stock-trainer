import React from "react";
import { Segment, Input } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";
import Stock from "../stock/Stock";
import Favorites from "../favorites/Favorites";

const dummyData = [{ name: "Apple" }, { name: "Amazon" }];

const Dashboard = props => {
  const { favorites } = props;
  return (
    <div className="gridContainer">
      <Segment>
        <Indicators />
      </Segment>
      <Segment className="userStocks">
        <Favorites favorites={favorites} />
      </Segment>
      <Segment className="leftColumn">
        <Input placeholder="Search..." className="stockSearch" />
        {dummyData.map(stock => (
          <div className="stockContainer" key={stock.name}>
            <Stock name={stock.name} />
          </div>
        ))}
      </Segment>
    </div>
  );
};

export default Dashboard;
