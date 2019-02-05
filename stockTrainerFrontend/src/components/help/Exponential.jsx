/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Exponential from "./images/Exponential.png";
import "./Opening.css";

const ExponentialMoving = () => (
  <Container text>
    <Header as="h1">Exponential Moving Average</Header>
    <p>
      Exponential Moving Average(EMA) is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/e/ema.asp">
        Investopedia
      </a>
      "a type of moving average that places a greater wieght and significance on
      the most recent data points." This reacts to the recent price changes of a
      stock. This is used to produce signals for investors to buy and sell
      stocks.
    </p>
    <p>
      The most common EMAs are 12 and 26 day averages. They are used to create a
      few indicators i.e. moving average convergence divergence. They are suited
      better for trending markets than just day to day trading uses.
    </p>
    <img src={Exponential} alt="Apple Graph" className="open" />
    {/* Image taken from app's graphs */}
  </Container>
);

export default ExponentialMoving;
