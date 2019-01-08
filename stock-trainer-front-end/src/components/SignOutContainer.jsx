import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class SignInContainer extends Component {
  render() {
    return (
      <div>
        <Button size='big' primary>Register</Button>
        <Button size='big' secondary> Sign In</Button>
      </div>
    );
  }
}
