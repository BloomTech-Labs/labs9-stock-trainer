/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Simple from "./images/Simple.png";
import "./Opening.css";

const SimpleMoving = () => (
  <Container text>
    <Header as="h1">Simple Moving Average</Header>
    <p>
      Simple Moving Average is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/s/sma.asp">
        Investopedia
      </a>
      "an arithmetic moving average calculated by adding recent closing prices
      and then dividing that by the number of time periods in the calculation
      average." In simplier terms it's calculated by adding the closing price
      for a number of time periods and dividing by the same number of time
      periods.
    </p>
    <p>
      It's used to calculate to see if the stock price will either continue or
      reverse a trend. It helps smooth out volatility and be easier to see the
      stocks price trend.
    </p>
    <img src={Simple} alt="Apple Graph" className="open" />
  </Container>
);

export default SimpleMoving;
