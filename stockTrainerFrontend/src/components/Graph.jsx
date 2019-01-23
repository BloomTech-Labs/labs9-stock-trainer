import React from "react";
import { Segment } from "semantic-ui-react";
import { VictoryChart, VictoryLine } from "victory";
import "./Graph.css";

// data should consist of an array of objects
const data = [
  { x: 1, y: 13000 },
  { x: 2, y: 16500 },
  { x: 3, y: 14250 },
  { x: 4, y: 19000 }
];

// currently throws some warnings about non-boolean attributes receiving boolean values, will need to fix
class Graph extends React.Component {
  constructor(props) {
    super(props);
    console.log(`constructor`);
    this.state = {
      data: {}
    };
  }

  componentDidMount = () => {
    const { stockData } = this.props;
    this.setState({
      data: stockData
    });
  };

  render() {
    console.log(data);
    return (
      <Segment className="graph">
        <VictoryChart>
          <VictoryLine
            style={{
              data: { stroke: "#0984e3" }, // color of the stroke
              parent: { border: "1px solid #ccc" }
            }}
            data={data}
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
