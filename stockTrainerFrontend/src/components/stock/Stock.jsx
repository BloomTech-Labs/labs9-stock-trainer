import React from "react";
import { Icon } from "semantic-ui-react";
import "./Stock.css";

const Stock = props => {
  const { name, symbol, big, info } = props;
  return (
    <div className="stock">
      {big ? (
        <h1 className="stockName">
          {name}
          {symbol ? ` (${symbol})` : ""}
        </h1>
      ) : (
        <h3 className="stockName">
          {name}
          {symbol ? ` (${symbol})` : ""}
        </h3>
      )}
      <Icon className="favoriteIcon" name="star outline" size="big" />
      <div className="leftColumnInfobox">
        <div className="upperRowInfobox">Price: {info.price}</div>
        <div className="lowerRowInfobox">Volume: {info.volume}</div>
      </div>
      <div className="rightColumnInfobox">
        <div className="upperRowInfobox">Change: {info.change}</div>
        <div className="lowerRowInfobox">Change %: {info.changePercentage}</div>
      </div>
    </div>
  );
};

export default Stock;
