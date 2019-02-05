import React from "react";
import { format } from "d3-format"; // eslint-disable-line
import { timeFormat } from "d3-time-format"; // eslint-disable-line

import { ChartCanvas, Chart } from "react-stockcharts";
import {
  ScatterSeries,
  BollingerSeries,
  CircleMarker,
  LineSeries,
  SARSeries
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip,
  SingleValueTooltip,
  BollingerBandTooltip
} from "react-stockcharts/lib/tooltip";
import {
  sma,
  atr,
  ema,
  bollingerBand,
  sar
} from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import "./Graph.css";

const bbStroke = {
  top: "#964B00",
  middle: "#000000",
  bottom: "#964B00"
};

const bbFill = "#4682B4";

const accelerationFactor = 0.02;
const maxAccelerationFactor = 0.2;

function indicatorGraph(indicator, indicatorHelper) {
  // switch statement to help us decide what to render
  switch (indicator) {
    case "sma":
      return (
        <>
          <LineSeries
            yAccessor={indicatorHelper.accessor()}
            stroke={indicatorHelper.stroke()}
          />
          <CurrentCoordinate
            yAccessor={indicatorHelper.accessor()}
            fill={indicatorHelper.stroke()}
          />
          <MovingAverageTooltip
            origin={[-38, 15]}
            options={[
              {
                yAccessor: indicatorHelper.accessor(),
                type: "Simple Moving Average",
                stroke: indicatorHelper.stroke(),
                windowSize: indicatorHelper.options().windowSize,
                echo: "some echo here"
              }
            ]}
          />
        </>
      );
    case "atr":
      return (
        <>
          {/* atr values are too small to be seen on graph */}
          {/* might have to make a new chart below and then switch case that as well */}
          <LineSeries
            yAccessor={indicatorHelper.accessor()}
            stroke={indicatorHelper.stroke()}
          />
          <CurrentCoordinate
            yAccessor={indicatorHelper.accessor()}
            fill={indicatorHelper.stroke()}
          />
          <SingleValueTooltip
            origin={[-38, 15]}
            yAccessor={indicatorHelper.accessor()}
            yLabel={`Average True Range (${
              indicatorHelper.options().windowSize
            })`}
            yDisplayFormat={format(".2f")}
          />
        </>
      );
    case "ema":
      return (
        <>
          <LineSeries
            yAccessor={indicatorHelper.accessor()}
            stroke={indicatorHelper.stroke()}
          />
          <CurrentCoordinate
            yAccessor={indicatorHelper.accessor()}
            fill={indicatorHelper.stroke()}
          />
          <MovingAverageTooltip
            origin={[-38, 15]}
            options={[
              {
                yAccessor: indicatorHelper.accessor(),
                type: "Exponential Moving Average",
                stroke: indicatorHelper.stroke(),
                windowSize: indicatorHelper.options().windowSize,
                echo: "some echo here"
              }
            ]}
          />
        </>
      );
    case "bb":
      return (
        <>
          <BollingerSeries
            yAccessor={d => d.indicatorHelper}
            stroke={bbStroke}
            fill={bbFill}
          />
          <BollingerBandTooltip
            origin={[-38, 20]}
            yAccessor={d => d.indicatorHelper}
            options={indicatorHelper.options()}
          />
        </>
      );
    case "sar":
      return (
        <>
          <SARSeries yAccessor={d => d.sar} />
          <SingleValueTooltip
            yLabel={`Parabolic SAR (${accelerationFactor}, ${maxAccelerationFactor})`}
            yAccessor={d => d.sar}
            origin={[-40, 20]}
          />
        </>
      );
    default:
      return null;
  }
}

class LineAndScatterChart extends React.Component {
  constructor(props) {
    super(props);
    this.contain = React.createRef();

    this.state = { data: [], chartWidth: 0, chartHeight: 0 };
  }

  componentDidMount() {
    this.setState({
      chartWidth: this.contain.current.offsetWidth,
      chartHeight: this.contain.current.offsetHeight
    });
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // remove this on unmount
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

  updateDimensions() {
    if (this.contain.current) {
      this.setState({
        chartWidth: this.contain.current.offsetWidth,
        chartHeight: this.contain.current.offsetHeight
      });
    }
  }

  render() {
    const { type, currentSymbol, indicator, ratio } = this.props;
    const { chartHeight, chartWidth } = this.state;
    let { data: initialData } = this.state;
    if (initialData.length < 1) {
      return (
        <div ref={this.contain} className="graph placeholder">
          <h1>Search for stock data above!</h1>
        </div>
      );
    }
    let indicatorHelper = 0;
    switch (indicator) {
      // switch statement to help us decide which function to use depending on indicator
      case "sma":
        indicatorHelper = sma()
          .options({ windowSize: 20 })
          .merge((d, c) => {
            d.indicatorHelper = c; // eslint-disable-line
          })
          .accessor(d => d.indicatorHelper);
        break;
      case "atr":
        indicatorHelper = atr()
          .options({ windowSize: 14 })
          .merge((d, c) => {
            d.indicatorHelper = c; // eslint-disable-line
          })
          .accessor(d => d.indicatorHelper);
        break;
      case "ema":
        indicatorHelper = ema()
          .options({ windowSize: 20 })
          .merge((d, c) => {
            d.indicatorHelper = c; // eslint-disable-line
          })
          .accessor(d => d.indicatorHelper);
        break;
      case "bb":
        indicatorHelper = bollingerBand()
          .merge((d, c) => {
            d.indicatorHelper = c; // eslint-disable-line
          })
          .accessor(d => d.indicatorHelper);
        break;
      case "sar":
        indicatorHelper = sar()
          .options({
            accelerationFactor,
            maxAccelerationFactor
          })
          .merge((d, c) => {
            d.sar = c; // eslint-disable-line
          })
          .accessor(d => d.sar);
        break;
      default:
        break;
    }
    if (indicatorHelper) {
      initialData = indicatorHelper(initialData);
    }
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      initialData
    );
    const xExtents = [xAccessor(last(data)), xAccessor(data[0])];

    return (
      <div ref={this.contain} className="graph">
        <ChartCanvas
          ratio={ratio}
          width={chartWidth}
          height={chartHeight}
          margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
          type={type}
          pointsPerPxThreshold={40}
          seriesName={currentSymbol}
          data={data}
          clamp
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xScale={xScale}
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={d => [d.high, d.low]}>
            <XAxis axisAt="bottom" orient="bottom" />
            <YAxis axisAt="right" orient="right" />
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
            <LineSeries yAccessor={d => d.close} strokeDasharray="LongDash" />
            <ScatterSeries
              yAccessor={d => d.close}
              marker={CircleMarker}
              markerProps={{ r: 3 }}
            />
            {indicatorGraph(indicator, indicatorHelper)}
            <OHLCTooltip forChart={1} origin={[-40, 0]} />
          </Chart>

          <CrossHairCursor />
        </ChartCanvas>
      </div>
    );
  }
}

LineAndScatterChart = fitWidth(LineAndScatterChart); // eslint-disable-line

export default LineAndScatterChart;
