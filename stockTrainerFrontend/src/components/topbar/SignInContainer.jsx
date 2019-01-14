import React from "react";
import { Button } from "semantic-ui-react";
import auth0Client from "../../Auth";

class SignInContainer extends React.Component {
  signIn = () => {
    auth0Client.signIn();
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
