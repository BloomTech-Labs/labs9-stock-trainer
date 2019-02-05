/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Average from "./images/Average.jpg";
import "./Opening.css";

const AverageTrueRange = () => (
  <Container text>
    <Header as="h1">Average True Range</Header>
    <p>
      Average True Range(ATR) is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/a/atr.asp">
        Investopedia
      </a>
      "a technical analysis indicator that measures market volatility by
      decomposing the entire range of an asset price for that period." You can
      calculate this by having the current high minus the current low, along
      with the absolute value of the current high minus the previous close, and
      finally with the absolute value of the current low minus the previous
      close.
    </p>
    <p>
      Average true range was made for traders to measure more accurately the
      daily volatility of a stock. It's mainly used for exiting a stock. It
      doesn't indicate price direction but rather measure volatility caused by
      gaps.
    </p>
    <img src={Average} alt="Apple Graph" className="open" />
    {/* Image used from: https://www.pexels.com/photo/flat-lay-photography-of-macbook-pro-beside-paper-1509428/ */}
  </Container>
);

export default AverageTrueRange;
