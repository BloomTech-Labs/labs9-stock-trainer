import React from "react";
import { withRouter } from "react-router-dom";

const Callback = props => {
  const { auth } = props;
  auth.handleAuthentication().then(() => {
    props.history.push("/dashboard");
    props.signinchange();
  });

  return <h1>Loading profile...</h1>;
};

export default withRouter(Callback);
