/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Moving from "./images/moving.png";
import "./Opening.css";

const MovingAverage = () => (
  <Container text>
    <Header as="h1">Moving Average</Header>
    <p>
      Moving Average is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/ask/answers/071414/whats-difference-between-moving-average-and-weighted-moving-average.asp"
      >
        Investopedia
      </a>
      "one of the most populare tools used by active traders to measure
      momentum." There are 3 types of moving averages simple moving average,
      exponential moving average, and moving average.
    </p>
    <img src={Moving} alt="Apple Graph" className="open" />
    {/* Image taken from app's graphs */}
  </Container>
);

export default MovingAverage;
