import React from "react";
import { Input, Segment, Header } from "semantic-ui-react";
import Stock from "../stock/Stock";

const Favorites = props => {
  const { favorites } = props;

  return (
    <div>
      <Header attached="top">
        <Input
          placeholder="Search for stock"
          value=""
          onChange=""
          fluid
          action={{
            content: "search",
            onClick: () => {}
          }}
        />
      </Header>

      <Segment className="articlesDisplay" attached>
        <Stock name="test" />
      </Segment>
    </div>
  );
};

export default Favorites;
