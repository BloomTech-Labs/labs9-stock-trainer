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
      latestPrice: "",
      latestVolume: "",
      changePercent: 0
    };
  } else if ("quote" in info) {
    info = info.quote;
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
        {big ? (
          <div className="upperRowInfobox">
            Latest Price: ${info.latestPrice}
          </div>
        ) : (
          <div className="upperRowInfobox">
            Current Price: ${info.latestPrice}
          </div>
        )}
      </div>
      <div className="middleColumnInfobox">
        <div className="upperRowInfobox">Volume: {info.latestVolume}</div>
      </div>
      <div className="rightColumnInfobox">
        <div className="upperRowInfobox">Change: {info.changePercent}%</div>
      </div>
    </div>
  );
};

export default Stock;
