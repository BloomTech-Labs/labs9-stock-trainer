import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Stock.css";

const Stock = props => {
  // todo fix this mess
  const { name, symbol, big, favorites, favoriteToggle } = props;
  let { info } = props;
  let isFavorite = "star outline";
  if (typeof info === "undefined" && !big) {
    info = {
      latestPrice: "",
      latestVolume: "",
      changePercent: 0
    };
  } else if ("quote" in info) {
    info = info.quote;
  } else if (typeof info === "undefined" && big) {
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
        <Link className="stockName" to={`/reports/${symbol}`}>
          <h3 className="stockName">
            {name}
            {symbol ? ` (${symbol})` : ""}
          </h3>
        </Link>
      )}
      <Icon
        className="favoriteIcon"
        name={isFavorite}
        size="big"
        onClick={symbol ? () => favoriteToggle(symbol) : () => {}}
      />
      {big ? (
        <div className="leftColumnInfobox">
          <div className="upperRowInfobox">Start Price: {info.startPrice}</div>
          <div className="lowerRowInfobox">Volume: {info.latestVolume}</div>
        </div>
      ) : (
        <div className="leftColumnInfobox">
          <div className="upperRowInfobox">Price:</div>
          <div>${Number(info.latestPrice).toFixed(2)}</div>
        </div>
      )}
      {big ? (
        <div className="middleColumnInfobox">
          <div className="upperRowInfobox">End Price: {info.endPrice}</div>
          <div className="lowerRowInfobox">Days Measured: {info.days}</div>
        </div>
      ) : (
        <div className="middleColumnInfobox">
          <div className="upperRowInfobox">Volume: </div>
          <div>{info.latestVolume}</div>
        </div>
      )}
      {big ? (
        <div className="rightColumnInfobox">
          <div className="upperRowInfobox">Change: {info.change}</div>
          <div className="lowerRowInfobox">Change %: {info.changePercent}</div>
        </div>
      ) : (
        <div className="rightColumnInfobox">
          <div className="upperRowInfobox">Change: </div>
          <div>{info.changePercent}%</div>
        </div>
      )}
    </div>
  );
};

export default Stock;
