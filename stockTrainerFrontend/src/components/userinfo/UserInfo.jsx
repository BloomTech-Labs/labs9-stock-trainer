import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

class UserInfo extends Component {
  state = {
    name: "",
    portfolio: []
  };

  componentDidMount() {
    // axios call here
    this.setState({
      name: "Punit",
      portfolio: [
        { name: "APPL", amount: "15" },
        { name: "AMZN", amount: "15" }
      ]
    });
  }

  render() {
    const { name, portfolio } = this.state;
    return (
      <Container style={{ marginTop: "50px" }}>
        <Header as="h2">Info for {name}</Header>
        <Header as="h3">Portfolio:</Header>
        {portfolio.map(stock => (
          <Segment key={stock.name}>
            <p>{stock.name}</p>
            <p>Amount: {stock.amount}</p>
          </Segment>
        ))}
      </Container>
    );
  }
}

export default UserInfo;
