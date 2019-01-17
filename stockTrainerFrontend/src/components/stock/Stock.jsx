import React from "react";
import { Header, Icon, Input } from "semantic-ui-react";
import "./Stock.css";

const Stock = () => (
  <>
    <Header className="stockName" as="h1">
      Stock Name
    </Header>
    <Icon className="favoriteIcon" name="star outline" size="big" />
    <Input className="reportsSearch" placeholder="Search..." />
    <div className="leftColumnInfobox">
      <div className="upperRowInfobox">Price: $148.40</div>
      <div className="lowerRowInfobox">Volume: 43.28M</div>
    </div>
    <div className="rightColumnInfobox">
      <div className="upperRowInfobox">Change: 6.07</div>
      <div className="lowerRowInfobox">Change %: +4.27</div>
    </div>
  </>
);

export default Stock;
