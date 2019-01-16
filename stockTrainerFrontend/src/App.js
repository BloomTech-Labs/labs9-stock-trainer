import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import NavBar from "./components/navbar/NavBar";

import AccountSettings from "./components/accountSettings/AccountSettings";
import Landing from "./components/landing/Landing";

import Reports from "./components/reports/Reports";
import Targets from "./components/targets/Targets";
import Billing from "./components/billing/Billing";
import UserInfo from "./components/userinfo/UserInfo";
import Dashboard from "./components/dashboard/Dashboard";

import Callback from "./Auth/Callback";
import TestRequest from "./components/TestRequest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      currentUser: "test user",
      jwt: "TESTESTEST",
      stockData: {}
    };
  }

  signOut = () => {
    this.setState({ signedIn: false });
  };

  register = () => {
    this.setState({ currentUser: Math.floor(Math.random() * 10) }, () => {
      this.signIn();
    });
  };

  signIn = () => {
    this.setState({
      signedIn: true
    });
  };

  retrieveStock = (nameOfStock, startDate, endDate) => {
    const { jwt, stockData } = this.state;
    const paramSettings = {
      NAME: nameOfStock
    };
    if (startDate) {
      paramSettings.STARTDATE = startDate;
    }
    if (endDate) {
      paramSettings.ENDDATE = endDate;
    }
    axios
      .request({
        method: "get",
        baseURL: `${process.env.REACT_APP_BACKEND_URL}/stock`,
        headers: {
          Authorization: `Bearer ${jwt}`
        },
        params: paramSettings
      })
      .then(res => {
        const newState = { ...stockData };
        newState[res.data.symbol] = {
          symbol: res.data.symbol,
          name: res.data.name,
          price: res.data.price
        };
        this.setState({
          stockData: newState
        });
      });
  };

  render() {
    const { currentUser, signedIn, stockData } = this.state;
    return (
      <div className="App">
        <TopBar
          currentUser={currentUser}
          signedInState={signedIn}
          signOutFunc={this.signOut}
          signInFunc={this.signIn}
          register={this.register}
        />
        <Switch>
          <Route
            exact
            path="/userinfo"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <UserInfo />
              </div>
            )}
          />
          <Route
            exact
            path="/settings"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <AccountSettings />
              </div>
            )}
          />
          <Route
            exact
            path="/billing"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Billing />
              </div>
            )}
          />
          <Route
            exact
            path="/targets"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Targets />
              </div>
            )}
          />
          <Route
            exact
            path="/reports"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Reports />
              </div>
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Dashboard />
              </div>
            )}
          />
          <Route
            exact
            path="/testrequest"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <TestRequest
                  retrieveStock={this.retrieveStock}
                  stockData={stockData}
                />
              </div>
            )}
          />
          <Route exact path="/" render={props => <Landing {...props} />} />
          <Route exact path="/callback" Component={Callback} />
        </Switch>
      </div>
    );
  }
}

export default App;
