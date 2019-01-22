import React from "react";
import { Icon } from "semantic-ui-react";
import "./Stock.css";

const Stock = props => {
  const { name, symbol } = props;
  return (
    <div className="stock">
      <h1 className="stockName">
        {name}
        {symbol ? ` (${symbol})` : ""}
      </h1>
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
