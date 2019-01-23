import React from "react";
import { Input, Segment, Header, List } from "semantic-ui-react";
import Stock from "../stock/Stock";

import "./Favorites.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLastItem: 14,
      items: props.data.slice(0, 14),
      showLoad: false
    };
  }

  // big problem here is people with very vertical screens. this only triggers on scroll. Need to find a way to trigger if there's no overflow too.
  handleScroll = e => {
    const { currentLastItem, items } = this.state;
    const { data } = this.props;
    // This is a very goofy way to make it so you don't have to scroll to very bottom to make this work
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight;
    if (bottom && data.length !== items.length) {
      this.setState(
        { showLoad: true, currentLastItem: currentLastItem + 10 },
        () => {
          this.setState({
            items: data.slice(0, currentLastItem),
            showLoad: false
          });
        }
      );
    }
  };

  render() {
    const { title } = this.props;
    const { items, showLoad } = this.state;
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

        <Segment
          className="favoritesDisplay"
          onScroll={this.handleScroll}
          attached
        >
          <List className="helpSearch" divided>
            {items.map((e, i) => (
              <List.Item key={i} className="favoritesItem">
                <Stock name={e.name} />
              </List.Item>
            ))}
            {showLoad ? (
              <List.Item>
                <h3>Loadering...</h3>
              </List.Item>
            ) : (
              ""
            )}
          </List>
        </Segment>
      </div>
    );
  }
}

export default Favorites;
