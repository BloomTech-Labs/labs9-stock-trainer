import React from "react";
import { withRouter } from "react-router-dom";

const Callback = props => {
  const { auth } = props;
  auth.handleAuthentication().then(() => {
    props.history.push("/dashboard");
    props.signinchange();
  });

  return <p>Loading profile...</p>;
};

export default withRouter(Callback);
