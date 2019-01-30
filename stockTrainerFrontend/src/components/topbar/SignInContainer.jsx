import React from "react";
import { Button } from "semantic-ui-react";

const SignInContainer = props => {
  const { signInFunc } = props;
  return (
    <div>
      {/* <Button onClick={register} size="big" primary>
        Register
      </Button> */}
      <Button onClick={signInFunc} size="large" secondary>
        Sign In
      </Button>
    </div>
  );
};

export default SignInContainer;
