import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class Target extends Component {
  state = {
    target: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { target } = this.state;
    return (
      <div style={{ marginLeft: "200px" }}>
        Target: {target}
        <Input name="target" value={target} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Target;
