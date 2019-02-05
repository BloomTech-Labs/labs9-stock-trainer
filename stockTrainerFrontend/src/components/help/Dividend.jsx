/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Dividends from "./images/Dividend.jpg";
import "./Opening.css";

const Dividend = () => (
  <Container text>
    <Header as="h1">Dividend</Header>
    <p>
      Dividend is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/d/dividend.asp"
      >
        Investopedia
      </a>
      "the distribution of reward from a portion of company's earnings, and is
      paid to a class of its shareholders." Dividends are managed by a company's
      board of directors and they decide what the dividends will be. Though the
      shareholders get to approve of those decisions by their voting right. They
      can be issued as shares of stock, property and cash payments, though cash
      payments are the most common.
    </p>
    <p>
      It's a reward paid to the shareholders for their investments in a companys
      equity. The board of directors decide when to issue the dividends to the
      shareholders. This could be anywhere from monthly, quarterly or annually.
      Some companies even decide to still give out dividends from their net
      profits even if they don't make a suitable profit to keep up their
      established track record.
    </p>
    <img src={Dividends} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/brass-round-7-stack-coins-40140/ */}
  </Container>
);

export default Dividend;
