/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Adjust from "./images/Adjust.png";
import "./Opening.css";

const RecordHigh = () => (
  <Container text>
    <Header as="h1">Record High</Header>
    <p>
      Record High is, as stated in{" "}
      <a
        target="_blank"
        href="https://www.investopedia.com/terms/r/record_high.asp"
      >
        Investopedia
      </a>
      "the highest historical price level reached by a security, commodity or
      index during tranding." It's measured from opening price till it surpasses
      the previous record high. The values are nominal and do not account for
      inflation.
    </p>
    <p>
      Record highs usually come around due to investors wanting to purchase
      beleving the company will due well in the future. If a company is always
      reaching record highs the more investors are wanting to invest. But be
      aware that having repeated record highs might scare off investors because
      the numbers are going into uncharted territory. And record highs sound
      unnatural to investors which can make them warry of investing.
    </p>
    <img src={Adjust} alt="Apple Opening Price Graph" className="open" />
    {/* Image taken from app's graphs  */}
  </Container>
);

export default RecordHigh;
