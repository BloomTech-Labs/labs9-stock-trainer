import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auth from "./Auth";

class Callback extends Component {
  async componentDidMount() {
    await Auth.handleAuthentication();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.replace("/");
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(Callback);
