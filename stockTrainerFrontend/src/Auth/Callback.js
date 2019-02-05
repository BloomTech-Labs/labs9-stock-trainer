import React from "react";
import { withRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";

const Callback = props => {
  const { auth } = props;
  auth.handleAuthentication().then(() => {
    props.history.push("/dashboard");
    props.signinchange();
  });

  return (
    <div>
      <Loading active />
    </div>
  );
};

export default withRouter(Callback);
