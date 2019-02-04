/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import SAR from "./images/SAR.png";
import "./Opening.css";

const StockAppreciation = () => (
  <Container text>
    <Header as="h1">Stock Appreciation Right (SAR)</Header>
    <p>
      Stock Appreciation Right is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/s/sar.asp">
        Investopedia
      </a>
      "a bonus given to employees that is equal to the appreciation of a company
      stock over an extablished time period." They are similar to employee stock
      options. Some differences are employees don't have to pay the exercise
      price when the company stock prices rise and employees can recieve
      proceeds from stock price increases without buying anything. Employees
      recieve the sum of the increase in stock or cash.
    </p>
    <p>
      There are plenty of benefits of SAR's with the greatest being flexibility.
      They can be created differently for each employee. But because of this
      some of the flaws are there are numerous choices to make. SAR's offer the
      right to cash. They are almost always paid in cash.
    </p>
    <img src={SAR} alt="Apple Graph" className="open" />
    {/* Image was screenshotted using stock trainers graphs */}
  </Container>
);

export default StockAppreciation;
