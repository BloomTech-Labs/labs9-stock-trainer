import React from "react";
import { Segment } from "semantic-ui-react";
import { VictoryChart, VictoryLine } from "victory";
import "./Graph.css";

// data should consist of an array of objects
const testData = [
  { date: "2015-12-07", close: "118.8" },
  { date: "2015-12-08", close: "121.8" },
  { date: "2015-12-09", close: "141.8" },
  { date: "2015-12-10", close: "118.8" }
];

// currently throws some warnings about non-boolean attributes receiving boolean values, will need to fix
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: testData };
  }

  componentDidMount() {
    this.convertData();
  }

  convertData = () => {
    const { data } = this.state;
    const dataCopy = JSON.parse(JSON.stringify(data));
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
        </VictoryChart>
      </Segment>
    );
  }
}

export default Graph;
