/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Open from "./images/Open.png";
import "./Opening.css";

const OpeningPrice = () => (
  <Container text>
    <Header as="h1">Opening Price</Header>
    <p>
      Opening Price is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/o/openingprice.asp"
      >
        Investopedia
      </a>
      "the price at which a security first trades upon the opening of an
      exchange on a trading day." Which means investors take a look at the
      previous day's closing price and uses that to determine the next open
      trading day's opening price. But understand that the opening price will
      not be the same as the previous day's closing cost. Investors look at
      orders that have accumulated overnight during "after hours" trading.
    </p>
    <p>
      Opening prices can be effected by corporate announcements, natural
      disasters, and or man-made disasters that happen during after hours when
      the market is closed. "Not all orders are executed during after-hours" due
      to the market being effected by those stated above. Because of this the
      opening price can be veered away from the prior closing day's price due to
      lack of supply and demand.
    </p>
    <img src={Open} alt="Apple Opening Price Graph" className="open" />
    {/* Image taken from app's graphs */}
  </Container>
);

export default OpeningPrice;
