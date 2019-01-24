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
              data: { stroke: "#0984e3" }, // color of the stroke
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
          <VictoryAxis fixLabelOverlap />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </Segment>
    );
  }
}

export default Graph;
