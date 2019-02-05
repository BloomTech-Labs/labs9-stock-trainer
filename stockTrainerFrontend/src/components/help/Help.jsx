import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Input, Segment, Header } from "semantic-ui-react";

import "./Help.css";

import Helpmain from "./Helpmain";
import OpeningPrice from "./Opening";
import ClosingPrice from "./Closing";
import AfterHours from "./After";
import AdjustedClosing from "./Adjust";
import RecordLow from "./Low";
import RecordHigh from "./High";
import Volume from "./Volume";
import Transactions from "./Transactions";
import Dividend from "./Dividend";
import ExDividend from "./ExDividend";
import StockSplit from "./StockSplit";
import SplitAdjusted from "./SplitAdjusted";
import AverageTrueRange from "./Average";
import VolumeWeighted from "./Weighted";
import MovingAverage from "./Moving";
import ConvergenceDivergence from "./Convergence";
import ExponentialMoving from "./Exponential";
import SimpleMoving from "./Simple";
import BollingerBand from "./Bollinger";
import ParabolicSar from "./SAR";

const articles = [
  {
    title: "Opening Price",
    link: "/help/openingprice",
    text:
      "The price at which investors value or expect from the day before's trading and after-hours trading to sell at on the opening of the next trading day."
  },
  {
    title: "Closing Price",
    link: "/help/closingprice",
    text:
      "The final price of any stock traded on any trading day. It's the most up-to-date value of a stock, not count after-hours price."
  },
  {
    title: "After Hours Trading",
    link: "/help/afterhours",
    text:
      "After hours trading is the buying and selling of stocks out side of the normal trading hours, i.e. 9:30am - 4pm EST."
  },
  {
    title: "Adjusted Closing Price",
    link: "/help/adjustedclosing",
    text:
      "Adjusted closing price is the day's closing price ammended due to distributions and corporate actions that occur before the next open trading day."
  },
  {
    title: "Record Low",
    link: "/help/recordlow",
    text:
      "Is the lowest price a stock as ever reached over any given period of time, i.e. year, month, week, and day."
  },
  {
    title: "Record High",
    link: "/help/recordhigh",
    text:
      "Is the highest price a stock as ever reached over any given period of time. The price becomes a record high when is bypasses the previous record high recorded."
  },
  {
    title: "Volume",
    link: "/help/volume",
    text:
      "Volume is the number of shares traded during a period of time, i.e. if only 6 transactions happen in one day, the volume for that day is 6."
  },
  {
    title: "Transactions",
    link: "/help/transactions",
    text:
      "A transaction is when a buyer and seller agree on a certain price for the stock."
  },
  {
    title: "Dividend",
    link: "/help/dividend",
    text:
      "A dividend is a reward of distribution from a portion of a company's earnings. Dividends can be cash payments, shares of stock, or other property that is distributed to the company's shareholders."
  },
  {
    title: "Ex-Dividend",
    link: "/help/exdividend",
    text:
      "Ex-dividend is a stock that is traded without the value of the next divident payment. A buyer who buys a stock on or after the ex-dividend date is not entiled to the next divident payment."
  },
  {
    title: "Stock Split",
    link: "/help/stocksplit",
    text:
      "Stock split is an action made by a corporation that decides to divide it's existing shares into multiple shares to up the shares liquidity."
  },
  {
    title: "Split Adjusted",
    link: "/help/splitadjusted",
    text:
      "Split adjusted is a term used to describe data the has modifications given after a split has happen."
  },
  {
    title: "Average True Range (ATR)",
    link: "/help/averagetruerange",
    text:
      "Average True Range is a technical analysis indicator that measures the current high minus the current low over a price period."
  },
  {
    title: "Volume Weighted Average Price (VWAP)",
    link: "/help/volumeweighted",
    text:
      "Volume weighted average price is used in pension plans by adding up the price by the number of shares traded then divided by the total shares traded for the day."
  },
  {
    title: "Moving Average",
    link: "/help/movingaverage",
    text:
      "Is a widely used indicator that smooths out the busy noise from not important short-term price fluctuations. It's based on past prices."
  },
  {
    title: "Moving Average Convergence Divergence (MACD)",
    link: "/help/convergencedivergence",
    text:
      "Moving Average Convergence Divergence is the indicator that shows the relationship between two moving averages price. This is calculated by subtracting the 26-period from the 12-period exponential moving average."
  },
  {
    title: "Exponential Moving Average (EMA)",
    link: "/help/exponentialmoving",
    text:
      "Exponential moving average is a type of moving average that places the significance on the most recent data points."
  },
  {
    title: "Simple Moving Average (SMA)",
    link: "/help/simplemoving",
    text:
      "The simple moving average is calculated by adding the recent closing prices and dividing them by the number of time periods in the average."
  },
  {
    title: "Bollinger Band",
    link: "/help/bollingerband",
    text:
      "A bollinger band is a tool for analysis's to use that are defined by two lines, postive and negetive, plotted away from the simple moving average, but is adjustable to user's prefrences."
  },
  {
    title: "Parabolic SAR",
    link: "/help/parabolicsar",
    text:
      "A parablic SAR highlights the direction an assest or stock is moving while providing entry and exit points for said asset."
  }
];

export default class Help extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      displayList: articles
    };
  }

  handleChange = event => {
    if (event.target.value === "") {
      this.setState({
        searchText: event.target.value,
        displayList: articles
      });
      return;
    }
    this.setState({
      searchText: event.target.value,
      displayList: articles.filter(e =>
        e.title.toLocaleLowerCase().includes(event.target.value)
      )
    });
  };

  render() {
    const { match } = this.props;
    const { searchText, displayList } = this.state;
    return (
      <div className="helpContainer">
        {/* This is how we can add more pages */}
        <Header attached="top">
          <Input
            placeholder="Search for a help article"
            value={searchText}
            onChange={this.handleChange}
            fluid
          />
        </Header>

        <Segment className="articlesDisplay" attached>
          <Switch>
            <Route
              exact
              path={match.path}
              render={() => <Helpmain articles={displayList} />}
            />
            <Route
              path={`${match.path}/openingprice`}
              component={OpeningPrice}
            />
            <Route
              path={`${match.path}/closingprice`}
              component={ClosingPrice}
            />
            <Route path={`${match.path}/afterhours`} component={AfterHours} />
            <Route
              path={`${match.path}/adjustedclosing`}
              component={AdjustedClosing}
            />
            <Route path={`${match.path}/recordlow`} component={RecordLow} />
            <Route path={`${match.path}/recordHigh`} component={RecordHigh} />
            <Route path={`${match.path}/volume`} component={Volume} />
            <Route
              path={`${match.path}/transactions`}
              component={Transactions}
            />
            <Route path={`${match.path}/dividend`} component={Dividend} />
            <Route path={`${match.path}/exdividend`} component={ExDividend} />
            <Route path={`${match.path}/stocksplit`} component={StockSplit} />
            <Route
              path={`${match.path}/splitadjusted`}
              component={SplitAdjusted}
            />
            <Route
              path={`${match.path}/averagetruerange`}
              component={AverageTrueRange}
            />
            <Route
              path={`${match.path}/volumeweighted`}
              component={VolumeWeighted}
            />
            <Route
              path={`${match.path}/movingaverage`}
              component={MovingAverage}
            />
            <Route
              path={`${match.path}/convergencedivergence`}
              component={ConvergenceDivergence}
            />
            <Route
              path={`${match.path}/exponentialmoving`}
              component={ExponentialMoving}
            />
            <Route
              path={`${match.path}/simplemoving`}
              component={SimpleMoving}
            />
            <Route
              path={`${match.path}/bollingerband`}
              component={BollingerBand}
            />
            <Route
              path={`${match.path}/parabolicsar`}
              component={ParabolicSar}
            />
            <Redirect to="/404" />
          </Switch>
        </Segment>
      </div>
    );
  }
}
