import React from "react";
import {
  Grid,
  Segment,
  Placeholder,
  Pagination,
  Divider,
  Input,
  List
} from "semantic-ui-react";

const KeyIndicators = () => (
  <Grid padded stretched className="pageGrid" columns="equal">
    <Grid.Column>
      <Segment>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
        <Divider />
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
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
