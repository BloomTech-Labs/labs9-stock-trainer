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
      <div
        style={{
          height: "100%",
          fontSize: "36px"
        }}
      >
        <Input
          placeholder="Enter a stock symbol"
          value={textbox}
          onChange={e => this.setState({ textbox: e.target.value })}
          action={{
            content: "search",
            onClick: this.searchStock
          }}
        />
        <div
          className="resultsList"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
          }}
        >
          {Object.keys(stockData).map(key => (
            <div key={key} className="resultHolder">
              <div className="stockSymbol" style={{ margin: "2rem" }}>
                Stock symbol: {stockData[key].symbol}
              </div>
              {/* <div className="stockName">{stockData[key].name}</div> */}
              <div className="stockPrice" style={{ margin: "2rem" }}>
                Closing price: {stockData[key].price}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default TestRequest;
