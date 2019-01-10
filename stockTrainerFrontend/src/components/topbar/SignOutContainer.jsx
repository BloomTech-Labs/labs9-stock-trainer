import React from "react";
import { Button } from "semantic-ui-react";

const SignedOutContainer = ({ currentUser }) => (
  <div className="signoutContainer">
    <div className="currentUserText">{currentUser}</div>
    <Button size="big" basic>
      Sign Out
    </Button>
  </div>
);
export default SignedOutContainer;
