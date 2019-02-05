import React from "react";
import { Button, Input, Tab, Segment, Responsive } from "semantic-ui-react";
import "./Reports.css";
import Autosuggest from "react-autosuggest";
import stockSymbolList from "../../util/test.json";

import Stock from "../stock/Stock";
import NewGraph from "../Graph/Graph";
import Loading from "../loading/Loading";

// css for the suggest menu. There might be a way to move thise to the css file, look into that
const theme = {
  container: {
    height: "90%",
    fontSize: "1em"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    backgroundColor: "white",
    zIndex: "4",
    overflow: "auto",
    boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
    border: "1px solid rgba(34,36,38,.15)",
    overflowY: "auto",
    maxHeight: "600%",
    left: "0",
    right: "0"
    // width: "calc(60% - 6rem)"
  },
  suggestionsList: {
    zIndex: "4",
    paddingLeft: "0",
    marginTop: ".6rem"
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px",
    listStyleType: "none",
    lineHeight: "1.2em",
    borderTop: "1px solid rgba(34,36,38,.15)"
  },
  suggestionHighlighted: {
    backgroundColor: "#ddd"
  },
  input: {
    maxWidth: "100%",
    width: "100%",
    border: "1px solid rgba(34,36,38,.15)",
    color: "rgba(0,0,0,.87)",
    height: "100%",
    margin: "0"
  },
  suggestionFirst: {
    border: "0"
  }
};

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : stockSymbolList.filter(
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
    {suggestion.name} - <strong>{suggestion.symbol}</strong>
  </div>
);
// format for panes, look into seperate component?
const PlaceholderPane = props => {
  const { stockData, currentSymbol, indicator } = props;
  return (
    <Tab.Pane className="chartArea">
      <NewGraph
        stockData={stockData}
        currentSymbol={currentSymbol}
        indicator={indicator}
      />
    </Tab.Pane>
  );
};
// props are being passed down from the Tab component into our panes
const panes = [
  {
    menuItem: "Price",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane stockData={stockdata} currentSymbol={currentsymbol} />
      );
    }
  },
  {
    menuItem: "ATR",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane
          stockData={stockdata}
          currentSymbol={currentsymbol}
          indicator="atr"
        />
      );
    }
  },
  {
    menuItem: "SMA",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane
          stockData={stockdata}
          currentSymbol={currentsymbol}
          indicator="sma"
        />
      );
    }
  },
  {
    menuItem: "EMA",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane
          stockData={stockdata}
          currentSymbol={currentsymbol}
          indicator="ema"
        />
      );
    }
  },
  {
    menuItem: "Bollinger Band",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane
          stockData={stockdata}
          currentSymbol={currentsymbol}
          indicator="bb"
        />
      );
    }
  },
  {
    menuItem: "SAR",
    render: props => {
      const { stockdata, currentsymbol } = props;
      return (
        <PlaceholderPane
          stockData={stockdata}
          currentSymbol={currentsymbol}
          indicator="sar"
        />
      );
    }
  }
];

export default class Reports extends React.Component {
  constructor(props) {
    super(props);
    // value should always have the stock symbol currently working, stockName is the name of the company not the symbol, stockCard info is all other other stuff on there
    this.state = {
      value: "",
      suggestions: [],
      startDate: "2017-01-02",
      endDate: "2018-02-02",
      stockName: "Enter Stock",
      stockCardInfo: {},
      currentSymbol: "",
      activeIndex: 0,
      loading: false
    };
  }

  // this is dealing with an async axios request
  componentWillReceiveProps(nextProps) {
    const { stockData } = this.props;
    if (nextProps.stockData !== stockData) {
      this.useGottenData(nextProps.stockData);
      this.setState({ loading: false });
    }
    if (nextProps.modalOpen) {
      this.setState({ loading: false });
    }
  }

  // this is so if you go straight to /aapl it'll just pull up the defaults for it. It also has a bunch of checking and stuff
  componentDidMount = () => {
    const { match, history } = this.props;

    if (match.params.stockSymbol) {
      if (this.checkSymbol(match.params.stockSymbol)) {
        const { name } = stockSymbolList.find(
          x => x.symbol === match.params.stockSymbol
        );
        this.setState({
          value: match.params.stockSymbol,
          stockName: name,
          currentSymbol: match.params.stockSymbol
        });
      } else {
        history.push(`/reports/`);
      }
    }
  };

  // ensures the symbol is a valid one
  checkSymbol = symbolToFind =>
    stockSymbolList.find(x => x.symbol === symbolToFind);

  // only used for the search box
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

  // this is what runs when you hit the search button
  searchStock = async () => {
    const { value, startDate, endDate } = this.state;
    const { history, retrieveStock } = this.props;
    if (value === "") {
      return;
    }
    if (!this.checkSymbol(value)) {
      return;
    }
    history.push(`/reports/${value}`);

    // for those following along, this goes back to App.js runs the axios request. Notice despite being async nothing actually is run after it, that's because it was easier to just watch props for changes rather then hope they happened before the async part responded
    retrieveStock(value, startDate, endDate, "volume,close");
    this.setState({ loading: true });
    // .then(r=>
    //   // this.useGottenData()
    // );
  };

  // this is what runs when the props change
  useGottenData = stockData => {
    // remeber everything comes in a string
    const { value } = this.state;
    const dataArr = stockData[value].data;
    const last = parseFloat(dataArr[dataArr.length - 1].close);
    const first = parseFloat(dataArr[0].close);
    const changeCalc = last - first;
    const changePerc = (changeCalc / first) * 100;
    const newCard = {
      endPrice: last,
      startPrice: first,
      latestPrice: last,
      days: dataArr.length,
      latestVolume: parseFloat(dataArr[dataArr.length - 1].volume),
      // I'm not sure I like this .toFixed, it makes it a string again
      changePercent: changePerc.toFixed(2),
      change: changeCalc.toFixed(2)
    };
    const { name } = stockSymbolList.find(x => x.symbol === value);
    this.setState({
      stockCardInfo: newCard,
      currentSymbol: value,
      stockName: name
    });
  };

  dateChange = e => {
    const { id } = e.currentTarget;
    let { value } = e.currentTarget;
    const { startDate, endDate } = this.state;
    const testDate = new Date(`${value} 00:00`);
    if (testDate.getDay() === 0) {
      testDate.setDate(testDate.getDate() + 1);
      value = testDate.toISOString().substring(0, 10);
    }
    if (testDate.getDay() === 6) {
      value = testDate.setDate(testDate.getDate() + 2);
      value = testDate.toISOString().substring(0, 10);
    }
    if (id === "startDate" && Date.parse(value) > Date.parse(endDate)) {
      this.setState({
        [id]: endDate
      });
      return;
    }
    if (id === "endDate" && Date.parse(value) < Date.parse(startDate)) {
      this.setState({
        [id]: startDate
      });
      return;
    }
    this.setState({
      [id]: value
    });
  };

  changeTab = direction => {
    const { activeIndex } = this.state;

    if (direction === "up") {
      if (activeIndex === panes.length - 1) {
        this.setState({ activeIndex: 0 });
      } else {
        this.setState({ activeIndex: activeIndex + 1 });
      }
      return;
    }
    if (activeIndex === 0) {
      this.setState({ activeIndex: panes.length - 1 });
    } else {
      this.setState({ activeIndex: activeIndex - 1 });
    }
  };

  render() {
    const {
      value,
      suggestions,
      startDate,
      endDate,
      stockName,
      stockCardInfo,
      currentSymbol,
      activeIndex,
      loading
    } = this.state;
    const inputProps = {
      placeholder: "Search for a Stock",
      value,
      onChange: this.onChange
    };
    const { match, favorites, favoriteToggle, stockData } = this.props;
    return (
      <Segment className="reportsContainer">
        <Stock
          className="stock"
          big
          symbol={match.params.stockSymbol}
          name={stockName}
          info={stockCardInfo}
          favorites={favorites}
          favoriteToggle={favoriteToggle}
        />
        <div className="reportsSearch">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
          />
        </div>
        <Button
          className="searchButton"
          size="big"
          onClick={this.searchStock}
          secondary
        >
          Search
        </Button>
        <div id="from" className="dateSelect">
          <h3>From:</h3>
          <Input
            className="reportDateInput"
            max="2018-01-02"
            min="1996-02-01"
            type="date"
            value={startDate}
            id="startDate"
            onChange={this.dateChange}
          />
        </div>
        <div id="to" className="dateSelect">
          <h3>To:</h3>
          <Input
            className="reportDateInput"
            value={endDate}
            max="2018-02-01"
            min="1996-03-01"
            type="date"
            id="endDate"
            onChange={this.dateChange}
          />
        </div>
        <Responsive className="chart" minWidth={1000}>
          <Loading active={loading} />
          <Tab
            panes={panes}
            className="tabArea"
            stockdata={stockData[currentSymbol]}
            currentsymbol={currentSymbol}
          />
        </Responsive>
        <Responsive className="chart" maxWidth={999}>
          <Loading active={loading} />
          <div className="tabSelectSmall">
            <Button
              onClick={() => {
                this.changeTab("down");
              }}
              icon="arrow left"
            />
            {panes[activeIndex].menuItem}
            <Button
              onClick={() => {
                this.changeTab("up");
              }}
              icon="arrow right"
            />
          </div>
          <Tab
            className="tabArea"
            activeIndex={activeIndex}
            menu={{ className: "none" }}
            panes={panes}
            stockdata={stockData[currentSymbol]}
            currentsymbol={currentSymbol}
          />
        </Responsive>
      </Segment>
    );
  }
}
