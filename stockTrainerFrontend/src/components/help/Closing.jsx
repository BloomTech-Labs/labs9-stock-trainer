/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Closing from "./images/Closing.png";
import "./Opening.css";

const ClosingPrice = () => (
  <Container text>
    <Header as="h1">Closing Price</Header>
    <p>
      Closing Price is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/c/closingprice.asp"
      >
        Investopedia
      </a>
      "the final price at which a security is traded on a given trading day."
      Which means it's the most up-to-date valuation of a security until the
      opening price of the next trading day. Though the "after-hours" trading
      price will differ from the day's closing price.
    </p>
    <p>
      Closing prices don't show the "after-hours" prices and or corporate
      actions that accure after the closing of the trading day. The main use
      closing prices is during periods of time when corporates don't take
      actions, i.e. stock splits, stock dividends, not issued cash dividends.
    </p>
    <img src={Closing} alt="Apple Graph" className="open" />
    {/* Image taken from app's graphs */}
  </Container>
);

export default ClosingPrice;
