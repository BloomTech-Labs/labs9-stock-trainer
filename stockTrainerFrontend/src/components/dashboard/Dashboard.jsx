import React from "react";
import { Segment } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";
import Favorites from "../favorites/Favorites";
import companyList from "../../util/test.json";

const Dashboard = props => {
  const { favorites, favoriteToggle } = props;
  const favoriteObj = favorites
    .map(e => {
      {
        const newObj = {
          symbol: e,
          name: companyList.find(x => x.symbol === e).name
        };
        return newObj;
      }
    }) // this sort makes it the same order as the other list
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
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
          data={favoriteObj}
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
