/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Bollinger from "./images/Bollinger.png";
import "./Opening.css";

const BollingerBand = () => (
  <Container text>
    <Header as="h1">Bollinger Band</Header>
    <p>
      Bollinger Band is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/b/bollingerbands.asp"
      >
        Investopedia
      </a>
      "a technical analysis tool defined by a set of lines plotted two standard
      deviations (positively and negatively) away from a simple moving average
      of the security's price, but can be adjusted to user preferences." You can
      calculate the bollinger band by starting with calculating the 20-day
      simple moving average. Next step is getting the standard deviation. This
      measures how spread out the numbers are from the average value. Which is
      calculated by taking the square root of the variance multiplied by two and
      both add and subtract that number from each point in the simple moving
      average.
    </p>
    <p>
      The bollinger band is not to be treated as a standalone trading system. It
      is on indicator of many. It's designed to provide information regarding
      price volatility. Since they are calculated from the simple moving average
      new information may get diluted by outdated data. Because it weighs older
      price data the same as the most recent data.
    </p>
    <img src={Bollinger} alt="Apple Graph" className="open" />
    {/* Image was screenshotted using stock trainers graph */}
  </Container>
);

export default BollingerBand;
