import React from "react";
import { Segment } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";
import Favorites from "../favorites/Favorites";
import companyList from "../../util/test.json";

const Dashboard = props => {
  const { favorites, favoriteToggle } = props;
  return (
    <div className="gridContainer">
      <Segment>
        <Indicators />
      </Segment>
      <Segment className="userStocks">
        <Favorites
          title="Favorites"
          favorites={favorites}
          favoriteToggle={favoriteToggle}
          data={Array.from({ length: 100 }, () => ({
            name: Math.floor(Math.random() * 1000)
          }))}
        />
      </Segment>
      <Segment className="leftColumn">
        <Favorites
          favoriteToggle={favoriteToggle}
          favorites={favorites}
          title="Stock Ticker"
          data={companyList}
        />
      </Segment>
    </div>
  );
};

export default Dashboard;
