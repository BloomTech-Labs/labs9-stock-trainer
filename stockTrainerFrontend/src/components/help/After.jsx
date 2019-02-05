/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import After from "./images/After.png";
import "./Opening.css";

const AfterHours = () => (
  <Container text>
    <Header as="h1">After-Hours Trading</Header>
    <p>
      After-Hours trading is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/a/afterhourstrading.asp"
      >
        Investopedia
      </a>
      "the buying and selling of securities completed outside of regular trading
      hours." Emergence of electronic communication networks (ECNs) brought in a
      new era for stock trading. It lets individual and large insitutional
      investors interact anonymously and electronically. After-hours is accessed
      through brokerage accounts for investors. It's the last transaction and
      final price for a stock before the next open trading day.
    </p>
    <p>
      After-Hours are usually 8:00am - 9:15am sometimes as early as 6:00am for
      the morning session. And 4:15pm - 8:00pm for the afternoon/evening
      sessions. There are times that the after-hours will stay open up till the
      stock market opens. After-hours gives the advantage of trading when new
      information is given before the next trading day. It also gives investors
      the ability to trade during non-peak hours.
    </p>
    <img src={After} alt="Apple Graph" className="open" />
    {/* Image taken from app's graph */}
  </Container>
);

export default AfterHours;
