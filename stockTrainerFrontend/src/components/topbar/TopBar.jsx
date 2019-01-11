import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SignInContainer from "./SignInContainer";
import SignOutContainer from "./SignOutContainer";

const TopBar = props => {
  const {
    signedInState,
    currentUser,
    signOutFunc,
    signInFunc,
    register
  } = props;
  return (
    <Grid columns="equal" padded>
      <Grid.Column>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <Logo />
        </Link>
      </Grid.Column>
      <Grid.Column textAlign="right" floated="right">
        {signedInState ? (
          <SignOutContainer
            signOutFunc={signOutFunc}
            currentUser={currentUser}
          />
        ) : (
          <SignInContainer signInFunc={signInFunc} register={register} />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default TopBar;
