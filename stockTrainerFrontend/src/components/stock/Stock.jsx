import React from "react";
import { Icon } from "semantic-ui-react";
import "./Stock.css";

const Stock = props => {
  // todo fix this mess
  const { name, symbol, big, favorites, favoriteToggle } = props;
  let { info } = props;
  let isFavorite = "star outline";
  if (typeof info === "undefined") {
    info = {
      startPrice: "",
      endPrice: "",
      volume: "",
      days: 0,
      change: 0,
      changePercentage: 0
    };
  }

  if (favorites.find(x => x === symbol)) {
    isFavorite = "star";
  }
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
      <Icon
        className="favoriteIcon"
        name={isFavorite}
        size="big"
        onClick={symbol ? () => favoriteToggle(symbol) : () => {}}
      />
      <div className="leftColumnInfobox">
        <div className="upperRowInfobox">Start Price: {info.startPrice}</div>
        <div className="lowerRowInfobox">Volume: {info.volume}</div>
      </div>
      <div className="middleColumnInfobox">
        <div className="upperRowInfobox">End Price: {info.endPrice}</div>
        <div className="lowerRowInfobox">Days Measured: {info.days}</div>
      </div>
      <div className="rightColumnInfobox">
        <div className="upperRowInfobox">Change: {info.change}</div>
        <div className="lowerRowInfobox">Change %: {info.changePercentage}</div>
      </div>
    </div>
  );
};

export default Stock;
