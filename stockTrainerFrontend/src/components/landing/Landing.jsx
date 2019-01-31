/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Header, Segment } from "semantic-ui-react";

import "./Landing.css";

const Landing = () => (
  <div>
    <div className="bannerImage" />
    <Segment className="frontPageBox">
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
      <Header as="h3">Sign in above to begin!</Header>
    </Segment>
  </div>
);

export default Landing;
