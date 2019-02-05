/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Adjust from "./images/Adjust.png";
import "./Opening.css";

const Volume = () => (
  <Container text>
    <Header as="h1">Volume</Header>
    <p>
      Volume is, as stated in{" "}
      <a target="_blank" href="https://www.investopedia.com/terms/v/volume.asp">
        Investopedia
      </a>
      "the number of shares or contracts traded in a security or an entire
      market during a given period of time." When buyers and sellers agree on a
      certain price they make a transaction. And that transaction counts as one
      volume. If you look at the days transactions those are the days volume
      number.
    </p>
    <p>
      Volumes are important because they are used to measure the worth of a
      market move. More volume means the more significant the move is and the
      stronger the stock is. Anaylists use it to confirm price movement.
    </p>
    <img src={Adjust} alt="Apple Opening Price Graph" className="open" />
    {/* Image taken from app's graphs  */}
  </Container>
);

export default Volume;
