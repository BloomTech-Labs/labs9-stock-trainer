/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Adjust from "./images/Adjust.png";
import "./Opening.css";

const AdjustedClosing = () => (
  <Container text>
    <Header as="h1">Adjusted Closing Price</Header>
    <p>
      Adjusted Closing Price is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/a/adjusted_closing_price.asp"
      >
        Investopedia
      </a>
      "a stock's closing price on any given day of trading that has been
      admended to include any distributions and corporate actions that occured
      at any time before the next day's open." The price of a stock is usually
      affected by supply and demand of participants in the market. Though the
      price of a stock can be affected by corporate actions as well.
    </p>
    <p>
      It's a useful tool when analysts are examing the historical returns of a
      stock because it gives an accurate representation of equity value beyond
      the market price. It takes everything from corporate actions such as stock
      splits, dividends, and distributions offerings to give an accurate
      representation.
    </p>
    <img src={Adjust} alt="Apple Graph" className="open" />
    {/* Image taken from app's graphs  */}
  </Container>
);

export default AdjustedClosing;
