import { Input } from "semantic-ui-react";
import React, { Component } from "react";

class TestRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textbox: ""
    };
  }

  searchStock = () => {
    const { retrieveStock } = this.props;
    const { textbox } = this.state;
    if (textbox === "") {
      return;
    }
    retrieveStock(textbox.toUpperCase());
  };

  render() {
    const { stockData } = this.props;
    const { textbox } = this.state;
    return (
      <div>
        <Input
          placeholder="Enter a stock symbol"
          value={textbox}
          onChange={e => this.setState({ textbox: e.target.value })}
          action={{
            content: "search",
            onClick: this.searchStock
          }}
        />
        {Object.keys(stockData).map(key => (
          <div className="resultHolder">
            <div className="stockSymbol">{stockData[key].symbol}</div>
            <div className="stockName">{stockData[key].name}</div>
            <div className="stockPrice">{stockData[key].price}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default TestRequest;
