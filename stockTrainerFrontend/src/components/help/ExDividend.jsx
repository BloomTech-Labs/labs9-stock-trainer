/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Ex from "./images/ExDividend.jpg";
import "./Opening.css";

const ExDividend = () => (
  <Container text>
    <Header as="h1">Ex-Dividend</Header>
    <p>
      Ex-Dividend is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/e/ex-dividend.asp"
      >
        Investopedia
      </a>
      "a stock that is trading without the value of the next dividend payment."
      If a buyer buys a stock on or after the ex-dividend date they are not
      entitled to the dividend declared. It's still owned by the previous stock
      owner before the ex-dividend date. The stock price usually drops by the
      amount of the expected dividend.
    </p>
    <p>
      The board of directors at a company establish a record date when the
      company decides to have dividends as well as a ex-dividend date. The
      ex-dividend date is usally the day before the dividend date. It occurs
      this way because of the way stock trades are settled.
    </p>
    <img src={Ex} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/flat-lay-photography-of-calendar-1020323/ */}
  </Container>
);

export default ExDividend;
