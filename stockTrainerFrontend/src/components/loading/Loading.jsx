import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = props => {
  const { active } = props;
  return (
    <>
      <Dimmer active={active} inverted>
        <Loader />
      </Dimmer>
    </>
  );
};

export default Loading;
