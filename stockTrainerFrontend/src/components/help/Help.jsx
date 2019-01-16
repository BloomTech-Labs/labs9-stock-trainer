import React from "react";
import { Route } from "react-router-dom";
import helpMain from "./Helpmain";
import Test from "./Test";

export default function Help(props) {
  const { match } = props;
  return (
    <div>
      <div className="helpContainer">
        <Route exact path={match.path} component={helpMain} />
        <Route path={`${match.path}/test`} component={Test} />
      </div>
    </div>
  );
}
