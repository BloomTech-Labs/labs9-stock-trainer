import React, { Component } from "react";
import Logo from "./Logo";
import SignOutContainer from "./SignInContainer";
import SignInContainer from "./SignOutContainer";
import { Grid } from "semantic-ui-react";
import NavBreadcrumbs from "./NavBreadcrumbs";

export default class TopBar extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Column width={5}>
          <Logo />
        </Grid.Column>
        <Grid.Column floated="right" width={4}>
          {this.props.signedInState ? (
            <SignOutContainer currentUser={this.props.currentUser} />
          ) : (
            <SignInContainer />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
