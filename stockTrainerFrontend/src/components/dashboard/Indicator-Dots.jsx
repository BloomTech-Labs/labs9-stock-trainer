// This is from https://github.com/amio/re-carousel/blob/master/src/indicator-dots.js
/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

function Dot(props) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "0.5em",
        width: "0.5em",
        borderRadius: "50%",
        backgroundColor: "black",
        margin: "0.5em 0.5em 0",
        opacity: props.selected ? "1" : "0.3",
        transitionDuration: "300ms"
      }}
    />
  );
}

export default function IndicatorDots(props) {
  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    zIndex: "100",
    bottom: "0px",
    textAlign: "center"
  };

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div style={wrapperStyle} />;
  } else {
    return (
      <div style={wrapperStyle}>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />;
        })}
      </div>
    );
  }
}

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
