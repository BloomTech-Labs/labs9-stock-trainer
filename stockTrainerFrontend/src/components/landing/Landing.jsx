/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Header, Segment, List } from "semantic-ui-react";

import "./Landing.css";

const Landing = () => (
  <div>
    <div className="bannerImage" />
    <Segment className="frontPageBox">
      <Header as="h1" textAlign="center">
        Stock Trainer
        <Header.Subheader>
          Learn more about stocks and indicators!
        </Header.Subheader>
      </Header>
      <div className="centerList">
        <List>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Current Stock Data</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Graph Stock Data</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Graph Indicators</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Keep track of favorite stocks!</List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Average True Range</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Moving Average</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Bollinger Band</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="checkmark" color="green" />
            <List.Content>Learn more about indicators!</List.Content>
          </List.Item>
        </List>
      </div>
      <Header as="h3" textAlign="center">
        Sign in to begin!
      </Header>
    </Segment>
  </div>
);

export default Landing;
