import React, { Component } from "react";
import PlaceholderExampleImage from "./PlaceholderImage";
import { Header } from "semantic-ui-react";

export default class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <PlaceholderExampleImage />
        <div className="logoText" ><h1>Stock Trainer</h1></div>
      </div>
    );
  }
}
