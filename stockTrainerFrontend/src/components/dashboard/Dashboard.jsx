import React from "react";
import { Segment, Placeholder, Input, List } from "semantic-ui-react";
import "./Dashboard.css";
import Indicators from "./Indicators";

const Dashboard = () => (
  <div className="gridContainer">
    <Segment>
      <Indicators />
    </Segment>
    <Segment className="leftColumn">
      <Input placeholder="Search..." className="stockSearch" />
      <Placeholder>
        <List divided>
          <List.Item className="listItem">
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </List.Item>
          <List.Item className="listItem">
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </List.Item>
        </List>
      </Placeholder>
    </Segment>
    <Segment>
      <Placeholder>
        <List divided>
          <List.Item className="listItem">
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </List.Item>
          <List.Item className="listItem">
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </List.Item>
        </List>
      </Placeholder>
    </Segment>
  </div>
);

export default Dashboard;
