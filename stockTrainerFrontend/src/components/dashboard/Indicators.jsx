import React from "react";
import Carousel from "re-carousel";

export default function Indicators() {
  return (
    <Carousel loop auto>
      <div>
        <h3>Average True Range</h3>
        <p>
          Average True Range is an indicator that measures market volatility by
          calulating the current high minus the current low, calulate the
          absolute value of the current high minus the previous close, and
          calulate the absolute value of the current low minus the previous
          close during a 14 day period.
        </p>
      </div>
      <div>
        <h3>Indicator 2</h3>
      </div>
      <div>
        <h3>Indicator 3</h3>
      </div>
    </Carousel>
  );
}
