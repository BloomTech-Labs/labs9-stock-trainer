/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import SAR from "./images/SAR.png";
import "./Opening.css";

const ParabolicSar = () => (
  <Container text>
    <Header as="h1">Parabolic SAR</Header>
    <p>
      Parabolic SAR attemps, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/trading/introduction-to-parabolic-sar/"
      >
        Investopedia
      </a>
      "to give traders an edge by highlighting the direction an assest is
      moving, as well as providing entry and exit points." It is a techinical
      indicator that determines the price direction and provides attention when
      the price direction is changing.
    </p>
    <p>
      It is indicated on a chart by a series of darts either above or below the
      price line. If the darts are below the sign it means the price direction
      is moving upwards. And if the dots are above the line that means the price
      is moving downwards.
    </p>
    <img src={SAR} alt="Apple Graph" className="open" />
    {/* Image was screenshotted using stock trainers graphs */}
  </Container>
);

export default ParabolicSar;
