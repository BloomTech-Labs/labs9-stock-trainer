import { Button } from "semantic-ui-react";
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import data from "../util/test.json";

const theme = {
  suggestionsContainerOpen: {
    position: "absolute",
    backgroundColor: "white",
    width: "50%"
  },
  suggestionsList: {
    fontSize: "16px"
  },
  suggestion: {
    cursor: "pointer"
  }
};

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(
        lang =>
          lang.name.toLowerCase().slice(0, inputLength) === inputValue ||
          lang.symbol.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
// this will be the main function to allow suggestion -> symbol link
const getSuggestionValue = suggestion => suggestion.symbol;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name} - {suggestion.symbol}
  </div>
);

class TestRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  searchStock = () => {
    const { retrieveStock } = this.props;
    const { value } = this.state;
    if (value === "") {
      return;
    }
    retrieveStock(value.toUpperCase());
  };

  render() {
    const { stockData } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Look for a company!",
      value,
      onChange: this.onChange
    };
    return (
      <div
        style={{
          height: "100%",
          fontSize: "36px"
        }}
      >
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
        <Button onClick={this.searchStock}>Search</Button>
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
