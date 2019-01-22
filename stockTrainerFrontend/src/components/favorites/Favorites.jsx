import React from "react";
import { Input, Segment, Header, List } from "semantic-ui-react";
import Stock from "../stock/Stock";

import "./Favorites.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
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
      ]
    };
  }

  handleScroll = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.setState({
        items: this.state.items.concat([
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
        ])
      })
     
    }
  };

  render() {
    const { title } = this.props;
    const { items } = this.state;
    return (
      <div className="favoritesHolder">
        <Header attached="top">
          <h2>{title}</h2>
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

        <Segment className="favoritesDisplay" onScroll={this.handleScroll} attached>
          <List className="helpSearch" divided >
            {items.map((e, i) => (
              <List.Item key={i} className="favoritesItem">
                <Stock name={e.name} />
              </List.Item>
            ))}
            <List.Item>
              <h3>Loadering...</h3>
            </List.Item>
          </List>
        </Segment>
      </div>
    );
  }
}

export default Favorites;
