import React from "react";
import { withRouter } from "react-router-dom";

const Callback = props => {
  const { auth } = props;
  console.log(auth);
  auth.handleAuthentication().then(() => {
    props.history.push("/dashboard");
    props.signinchange();
  });

  return <p>Loading profile...</p>;
};

export default withRouter(Callback);
