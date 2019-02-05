/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Adjust from "./images/Adjust.png";
import "./Opening.css";

const RecordLow = () => (
  <Container text>
    <Header as="h1">Record Low</Header>
    <p>
      Record Low is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/r/record_low.asp"
      >
        Investopedia
      </a>
      "the lowest price or amount ever reached by a security, commodity or
      index." Record lows can be anything from the past year, month, week or
      even a single trading day. The reason for record lows to happen can be due
      to less interest in a company or trade due to bad news about the company.
    </p>
    <p>
      Record lows are bad news for a company or stock. When a record low hits a
      publicly traded company it's very hard for them to bounce back. It's hard
      for them to rebound in value and interest.
    </p>
    <img src={Adjust} alt="Apple Opening Price Graph" className="open" />
    {/* Image taken from app's graphs  */}
  </Container>
);

export default RecordLow;
