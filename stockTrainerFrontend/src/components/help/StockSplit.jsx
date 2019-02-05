/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Split from "./images/Split.jpg";
import "./Opening.css";

const StockSplit = () => (
  <Container text>
    <Header as="h1">Stock Split</Header>
    <p>
      Stock Split is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/s/stocksplit.asp"
      >
        Investopedia
      </a>
      "a corporate action in which a company divides its existing shares into
      multiple shares to boost the liquidity of the shares." Even though there
      are more shares the total dollar value remains the same because the split
      doesn't add any value.
    </p>
    <p>
      When splits occur the share prices adjust automatically. Stocks are split
      up how the board of directors want to spilt up. There are a number of ways
      to split up stocks i.e. 2-for-1, 3-for-1, 5-for-1, 10-for-1, and even
      100-for-1. For example 2-for-1 means that for everyone one share held
      there will now be two, but the price per share is deduced by dividing by
      2. This is so the company's overall value doesn't change.
    </p>
    <img src={Split} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/silver-iphone-6-plus-and-macbook-air-on-wooden-table-38629/ */}
  </Container>
);

export default StockSplit;
