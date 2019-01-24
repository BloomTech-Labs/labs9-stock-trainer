import React from "react";
import { Segment } from "semantic-ui-react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import "./Graph.css";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   this.convertData();
  // }

  componentWillReceiveProps(nextProps) {
    const { stockData } = this.props;
    if (nextProps.stockData !== stockData) {
      this.convertData(nextProps.stockData);
    }
  }

  convertData = data => {
    console.log(Object.keys(data));
    const key = Object.keys(data)[0];

    const dataCopy = JSON.parse(JSON.stringify(data[key].data));
    const newData = dataCopy.map(dataPoint => ({
      date: new Date(dataPoint.date),
      close: Number(dataPoint.close)
    }));
    this.setState({
      data: newData
    });
  };

  render() {
    const { data } = this.state;
    // console.log(data);
    return (
      <Segment className="graph">
        <VictoryChart scale={{ x: "time" }}>
          <VictoryLine
            style={{
              data: { stroke: "#00b894" }, // color of the stroke
              parent: { border: "1px solid #ccc" }
            }}
            data={data}
            x="date"
            y="close"
            animate={{
              // animation can be implemented
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
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
      </Segment>
    );
  }
}

export default Graph;
