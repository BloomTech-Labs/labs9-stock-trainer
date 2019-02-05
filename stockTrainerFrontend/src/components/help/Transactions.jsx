/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Transaction from "./images/Transaction.jpg";
import "./Opening.css";

const Transactions = () => (
  <Container text>
    <Header as="h1">Transactions</Header>
    <p>Transactions are what occurs between a buyer and a seller of a stock.</p>
    <img src={Transaction} alt="Apple Graph" className="open" />
    {/* Image from: https://www.pexels.com/photo/close-up-of-human-hand-327540/ */}
  </Container>
);

export default Transactions;
