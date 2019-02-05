/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Split from "./images/Split.jpg";
import "./Opening.css";

const ConvergenceDivergence = () => (
  <Container text>
    <Header as="h1">Moving Average Convergence Divergence</Header>
    <p>
      Moving Average Convergence Divergence(MACD) is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/m/macd.asp">
        Investopedia
      </a>
      "a trend-following momentum indicator that shows the relationship between
      two moving averages of a security's price." You can calculate this by
      subtracting the 26 day period from the 12 day period of the exponential
      moving average calculation. There is a line plotted after a nine-day
      exponential moving average of the moving average convergence divergence
      called the "signal line".
    </p>
    <p>
      This line is a trigger for investors to buy and sell a stock. When the
      MACD goes above that signal line is the time investors buy. And when it
      goes below the signal line is the time to sell the stock.
    </p>
    <img src={Split} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/silver-iphone-6-plus-and-macbook-air-on-wooden-table-38629/ */}
  </Container>
);

export default ConvergenceDivergence;
