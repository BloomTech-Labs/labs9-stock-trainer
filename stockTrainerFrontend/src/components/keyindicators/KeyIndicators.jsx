import React from "react";
import { Grid, Segment, Placeholder, Input, List } from "semantic-ui-react";
import "./KeyIndicators.css";
import Indicators from "./Indicators";

const KeyIndicators = () => (
  <Grid padded stretched className="pageGrid" columns="equal">
    <Grid.Column>
      <Segment className="topRight">
        <Indicators />
      </Segment>
      <Segment>
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
    </Grid.Column>
    <Grid.Column>
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
    </Grid.Column>
  </Grid>
);

export default KeyIndicators;
