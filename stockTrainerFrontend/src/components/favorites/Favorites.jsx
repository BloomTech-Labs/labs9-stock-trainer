import React from "react";
import { Input, Segment, Header, List } from "semantic-ui-react";
import Stock from "../stock/Stock";
import "./Favorites.css";

const Favorites = props => {
  // let { favorites } = props;

  const favorites = [
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" },
    { name: "testTEST" }
  ];

  return (
    <div className="favoritesHolder">
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

      <Segment className="favoritesDisplay" attached>
        <List className="helpSearch" divided>
          {favorites.map((e, i) => (
            <List.Item key={i} className="favoritesItem">
              <Stock name={e.name} />
            </List.Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};

export default Favorites;
