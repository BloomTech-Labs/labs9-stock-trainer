/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Volume from "./images/Average.jpg";
import "./Opening.css";

const VolumeWeighted = () => (
  <Container text>
    <Header as="h1">Volume Weighted Average Price</Header>
    <p>
      Volume Weighted Average Price(VWAP) is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/v/vwap.asp">
        Investopedia
      </a>
      "a trading benchmark used especially in pension plans." You can calculate
      the volume weighted average price by adding up traded dollars for every
      transaction divided by the toal shares. There's a therory that the lower
      the price than the VWAP the trade will be good, otherwise if the price is
      higher then it will be a bad trade.
    </p>
    <p>
      It's a useful tool for institutional investors to make large orders of
      buying and selling stocks and not disturb the market prices. If these
      large investors want to move into a stock position all at once, VWAP
      prevents the unnatural elevation of the price of the stock.
    </p>
    <img src={Volume} alt="Apple Graph" className="open" />
    {/* Image used from: https://www.pexels.com/photo/flat-lay-photography-of-macbook-pro-beside-paper-1509428/ */}
  </Container>
);

export default VolumeWeighted;
