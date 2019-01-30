import React from "react";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
  ScatterSeries,
  SquareMarker,
  TriangleMarker,
  CircleMarker,
  LineSeries
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import "./Graph.css";

class LineAndScatterChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillReceiveProps(nextProps) {
    // only if stockdata changes, will the convertData function be ran
    const { stockData } = this.props;
    if (nextProps.stockData !== stockData) {
      this.convertData(nextProps.stockData);
    }
  }

  convertData = data => {
    // function converts incoming data to data readable by victory
    const dataCopy = JSON.parse(JSON.stringify(data.data));
    const newData = dataCopy.map(dataPoint => ({
      date: new Date(dataPoint.date),
      close: Number(dataPoint.close),
      open: Number(dataPoint.open),
      low: Number(dataPoint.low),
      high: Number(dataPoint.high),
      volume: Number(dataPoint.volume)
    }));
    this.setState({
      data: newData
    });
  };

  render() {
    const { type, width, ratio } = this.props;
    const { data: initialData } = this.state;
    if (initialData.length < 1) {
      return <h1>Search for stock data above!</h1>;
    }
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      initialData
    );
    const xExtents = [xAccessor(last(data)), xAccessor(data[data.length - 20])];
    return (
      <ChartCanvas
        ratio={ratio}
        width={width}
        height={400}
        margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
        type={type}
        pointsPerPxThreshold={1}
        seriesName="MSFT"
        data={data}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xScale={xScale}
        xExtents={xExtents}
      >
        <Chart id={1} yExtents={d => [d.high, d.low, d.AAPLClose, d.GEClose]}>
          <XAxis axisAt="bottom" orient="bottom" />
          <YAxis
            axisAt="right"
            orient="right"
            // tickInterval={5}
            // tickValues={[40, 60]}
            ticks={5}
          />
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
          />

          <LineSeries
            yAccessor={d => d.AAPLClose}
            stroke="#ff7f0e"
            strokeDasharray="Dot"
          />
          <ScatterSeries
            yAccessor={d => d.AAPLClose}
            marker={SquareMarker}
            markerProps={{ width: 6, stroke: "#ff7f0e", fill: "#ff7f0e" }}
          />
          <LineSeries yAccessor={d => d.GEClose} stroke="#2ca02c" />
          <ScatterSeries
            yAccessor={d => d.GEClose}
            marker={TriangleMarker}
            markerProps={{ width: 8, stroke: "#2ca02c", fill: "#2ca02c" }}
          />
          <LineSeries yAccessor={d => d.close} strokeDasharray="LongDash" />
          <ScatterSeries
            yAccessor={d => d.close}
            marker={CircleMarker}
            markerProps={{ r: 3 }}
          />
          <OHLCTooltip forChart={1} origin={[-40, 0]} />
        </Chart>

        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

LineAndScatterChart = fitWidth(LineAndScatterChart); // eslint-disable-line

export default LineAndScatterChart;
