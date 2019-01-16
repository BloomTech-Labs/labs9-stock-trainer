import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Callback extends Component {
  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(Callback);
