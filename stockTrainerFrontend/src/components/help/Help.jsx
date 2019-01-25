import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Input, Segment, Header } from "semantic-ui-react";

import "./Help.css";

import Helpmain from "./Helpmain";
import Test from "./Test";

const articles = [
  {
    title: "Opening Price",
    link: "/help/test",
    text:
      "The price at which investors value or expect from the day before's trading and after-hours trading to sell at on the opening of the next trading day."
  },
  {
    title: "Closing Price",
    link: "/help/test",
    text:
      "The final price of any stock traded on any trading day. It's the most up-to-date value of a stock, not count after-hours price."
  },
  {
    title: "After Hours Trading",
    link: "/help/test",
    text:
      "After hours trading is the buying and selling of stocks out side of the normal trading hours, i.e. 9:30am - 4pm EST."
  },
  {
    title: "Adjusted Closing Price",
    link: "/help/test",
    text:
      "Adjusted closing price is the day's closing price ammended due to distributions and corporate actions that occur before the next open trading day."
  },
  {
    title: "Record Low",
    link: "/help/test",
    text:
      "Is the lowest price a stock as ever reached over any given period of time, i.e. year, month, week, and day."
  },
  {
    title: "Record High",
    link: "/help/test",
    text:
      "Is the highest price a stock as ever reached over any given period of time. The price becomes a record high when is bypasses the previous record high recorded."
  },
  {
    title: "Volume",
    link: "/help/test",
    text:
      "Volume is the number of shares traded during a period of time, i.e. if only 6 transactions happen in one day, the volume for that day is 6."
  },
  {
    title: "Transactions",
    link: "/help/test",
    text:
      "A transaction is when a buyer and seller agree on a certain price for the stock."
  },
  {
    title: "Dividend",
    link: "/help/test",
    text:
      "A dividend is a reward of distribution from a portion of a company's earnings. Dividends can be cash payments, shares of stock, or other property that is distributed to the company's shareholders."
  },
  {
    title: "Ex-Dividend",
    link: "/help/test",
    text:
      "Ex-dividend is a stock that is traded without the value of the next divident payment. A buyer who buys a stock on or after the ex-dividend date is not entiled to the next divident payment."
  },
  {
    title: "Stock Split",
    link: "/help/test",
    text:
      "Stock split is an action made by a corporation that decides to divide it's existing shares into multiple shares to up the shares liquidity."
  },
  {
    title: "Split Adjusted",
    link: "/help/test",
    text:
      "Split adjusted is a term used to describe data the has modifications given after a split has happen."
  },
  {
    title: "Average True Range (ATR)",
    link: "/help/test",
    text:
      "Average True Range is a technical analysis indicator that measures the current high minus the current low over a price period."
  },
  {
    title: "Volume Weighted Average Price (VWAP)",
    link: "/help/test",
    text:
      "Volume weighted average price is used in pension plans by adding up the price by the number of shares traded then divided by the total shares traded for the day."
  },
  {
    title: "Moving Average",
    link: "/help/test",
    text:
      "Is a widely used indicator that smooths out the busy noise from not important short-term price fluctuations. It's based on past prices."
  },
  {
    title: "Moving Average Convergence Divergence (MACD)",
    link: "/help/test",
    text:
      "Moving Average Convergence Divergence is the indicator that shows the relationship between two moving averages price. This is calculated by subtracting the 26-period from the 12-period exponential moving average."
  },
  {
    title: "Exponential Moving Average",
    link: "/help/test",
    text:
      "Exponential moving average is a type of moving average that places the significance on the most recent data points."
  },
  {
    title: "Simple Moving Average",
    link: "/help/test",
    text:
      "The simple moving average is calculated by adding the recent closing prices and dividing them by the number of time periods in the average."
  }
];

export default function Help(props) {
  const { match } = props;
  return (
    <div className="helpContainer">
      {/* This is how we can add more pages */}
      <Header attached="top">
        <Input
          placeholder="Search for a help article"
          value=""
          onChange=""
          fluid
          action={{
            content: "search",
            onClick: () => {}
          }}
        />
      </Header>

      <Segment className="articlesDisplay" attached>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Helpmain articles={articles} />}
          />
         <Route path={`${match.path}/test`} component={Test} />
          <Redirect to="/404" />
        </Switch>
      </Segment>
    </div>
  );
}
