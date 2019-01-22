import React from "react";
import { Segment } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";
import Favorites from "../favorites/Favorites";

const Dashboard = props => {
  const { favorites } = props;
  return (
    <div className="gridContainer">
      <Segment>
        <Indicators />
      </Segment>
      <Segment className="userStocks">
        <Favorites title="Favorites" favorites={favorites} />
      </Segment>
      <Segment className="leftColumn">
        <Favorites title="Stock Ticker" favorites={favorites} />
      </Segment>
    </div>
  );
};

export default Dashboard;
