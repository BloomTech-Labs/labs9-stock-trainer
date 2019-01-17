import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./Stock.css";

const Stock = props => {
  const { name } = props;
  return (
    <div className="stock">
      <Header className="stockName" as="h1">
        {name}
      </Header>
      <Icon className="favoriteIcon" name="star outline" size="big" />
      <div className="leftColumnInfobox">
        <div className="upperRowInfobox">Price: $148.40</div>
        <div className="lowerRowInfobox">Volume: 43.28M</div>
      </div>
      <div className="rightColumnInfobox">
        <div className="upperRowInfobox">Change: 6.07</div>
        <div className="lowerRowInfobox">Change %: +4.27</div>
      </div>
    </div>
  );
};

export default Stock;
