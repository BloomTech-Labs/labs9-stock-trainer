/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Divider,
  Button,
  Placeholder,
  Header,
  Segment
} from "semantic-ui-react";

const Landing = () => (
  <Container fluid textAlign="center">
    <Placeholder fluid style={{ height: 400, width: "100%" }}>
      <Placeholder.Image rectangular />
    </Placeholder>
    <Divider />
    <Segment className="frontPageBox" style={{ marginBottom: "1em" }}>
      <Header as="h2">About</Header>

      <p>
        Hey there. I bet you're here because you googled some combination of
        "easy" and "stocks," right? You probably don't understand stocks. Don't
        worry; we were once in your shoes. Here at Stock Trainer you can search
        for stocks, save your favorites, and learn to understand stock
        indicators. Get started by checking out the reports page, where you can
        see and search stocks and visualize the information in an updated prices
        graph. We're here for you, so check out the help page for definitions of
        the stock indicators. We're glad you're here!
      </p>
      <Link to="/dashboard">
        <Button secondary>Demo now!</Button>
      </Link>
    </Segment>
  </Container>
);

export default Landing;
