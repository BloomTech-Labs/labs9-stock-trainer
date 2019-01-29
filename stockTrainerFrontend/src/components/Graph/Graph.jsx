import React from "react";
import { Segment } from "semantic-ui-react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  createContainer
} from "victory";
import "./Graph.css";

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.contain = React.createRef();

    this.state = { data: [], chartWidth: 0 };
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
    console.log(stockData);
    if (nextProps.stockData !== stockData) {
      console.log(nextProps.stockData);
      this.convertData(nextProps.stockData);
    }
  }

  convertData = data => {
    // function converts incoming data to data readable by victory
    const dataCopy = JSON.parse(JSON.stringify(data.data));
    const newData = dataCopy.map(dataPoint => ({
      date: new Date(dataPoint.date),
      close: Number(dataPoint.close)
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
    const { data, chartWidth, chartHeight } = this.state;
    // console.log(data);
    return (
      <div ref={this.contain} className="graph">
        <VictoryChart
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
          width={chartWidth}
          height={chartHeight}
          padding={{ top: 15, bottom: 50, right: 15, left: 50 }}
          // padding= "50px"
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomVoronoiContainer
              labels={d => `${d.close}`}
              zoomDimension="x"
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "#00b894" }, // color of the stroke
              parent: { border: "1px solid #ccc" }
            }}
            data={data}
            x="date"
            y="close"
            // animate={{
            //   // animation can be implemented
            //   duration: 2000,
            //   onLoad: { duration: 1000 }
            // }}
          />
          <VictoryAxis
            fixLabelOverlap
            label="Date"
            style={{
              axisLabel: { padding: 30 },
              tickLabels: { fontSize: 15, padding: 5 }
            }}
          />
          <VictoryAxis
            dependentAxis
            label="Closing Price (USD)"
            style={{
              axisLabel: { display: "block", padding: 35 },
              tickLabels: { fontSize: 15, padding: 5 }
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Graph;
