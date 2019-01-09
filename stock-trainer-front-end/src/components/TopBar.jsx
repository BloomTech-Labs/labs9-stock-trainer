import React from "react";
import { Grid } from "semantic-ui-react";
import Logo from "./Logo";
import SignInContainer from "./SignInContainer";
import SignOutContainer from "./SignOutContainer";

const TopBar = props => {
  const { signedInState, currentUser } = props;
  return (
    <Grid padded>
      <Grid.Column width={5}>
        <Logo />
      </Grid.Column>
      <Grid.Column floated="right" width={4}>
        {signedInState ? (
          <SignOutContainer currentUser={currentUser} />
        ) : (
          <SignInContainer />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default TopBar;
