/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import SplAdj from "./images/Split.jpg";
import "./Opening.css";

const SplitAdjusted = () => (
  <Container text>
    <Header as="h1">Split Adjusted</Header>
    <p>
      Split Adjusted is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/s/splitadjusted.asp"
      >
        Investopedia
      </a>
      "a term applied to all data that undergoes modifications following a split
      or division, of a stock's share price." Companies can decide to split for
      a multidude of reasons but the most common is so most people can afford
      the price of the stock.
    </p>
    <p>
      Investors that own stock that undergo a split don't have major effects to
      the value of their holdings other than the change of share numbers.
    </p>
    <img src={SplAdj} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/silver-iphone-6-plus-and-macbook-air-on-wooden-table-38629/ */}
  </Container>
);

export default SplitAdjusted;
