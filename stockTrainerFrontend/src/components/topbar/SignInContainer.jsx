import React from "react";
import { Button } from "semantic-ui-react";
import auth0Client from "../../Auth";

class SignInContainer extends React.Component {
  signIn = () => {
    auth0Client.signIn();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.replace("/");
  };

  render() {
    return (
      <div>
        {/* I don't think we need the Register button. */}
        {/* <Button onClick={auth0Client.signIn} size="big" primary>
          Register
        </Button> */}
        {!auth0Client.isAuthenticated() && (
          <Button onClick={auth0Client.signIn} size="big" secondary>
            Sign In
          </Button>
        )}
      </div>
    );
  }
}

export default SignInContainer;
