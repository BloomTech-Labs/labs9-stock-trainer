import React from "react";
import { Segment } from "semantic-ui-react";
import "./NoMatch.css";

function NoMatch() {
  return (
    <Segment className="warning">
      <div className="four">404</div>
      <div className="sorryMessage">
        The page you are looking for can not be found.
      </div>
    </Segment>
  );
}

export default NoMatch;
