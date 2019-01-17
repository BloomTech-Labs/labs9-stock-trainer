import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import NavBar from "./components/navbar/NavBar";

import AccountSettings from "./components/accountSettings/AccountSettings";
import Landing from "./components/landing/Landing";

import Reports from "./components/reports/Reports";
import Billing from "./components/billing/Billing";
import UserInfo from "./components/userinfo/UserInfo";
import Dashboard from "./components/dashboard/Dashboard";
import Help from "./components/help/Help";

import Callback from "./Auth/Callback";
import TestRequest from "./components/TestRequest";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn: false,
      currentUser: "",
      jwt: "TESTESTEST",
      stockData: {}
    };
  }

  signOut = () => {
    const { auth } = this.props;
    auth.signOut();
    this.setState({ signIn: false });
  };

  switchSignInState = () => {
    const { auth } = this.props;
    const tokenPayload = auth.idTokenPayload;
    let nameToSet = "";
    if (tokenPayload.name.length > 0) {
      nameToSet = tokenPayload.name;
    } else {
      nameToSet = tokenPayload.nickname;
    }
    this.setState(prevState => ({
      signIn: !prevState.signIn,
      currentUser: nameToSet
    }));
  };

  signIn = () => {
    const { auth } = this.props;
    auth.signIn();
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
    const { auth } = this.props;
    const { currentUser, signIn, stockData } = this.state;
    return (
      <div className="App">
        <TopBar
          currentUser={currentUser}
          signedInState={signIn}
          signOutFunc={this.signOut}
          signInFunc={this.signIn}
        />
        <Switch>
          <Route
            path="/help"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Help {...props} />
              </div>
            )}
          />
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
          <Route
            exact
            path="/callback"
            render={props => (
              // eslint-disable-next-line no-undef
              // this.handleAuthentication(props);

              <Callback
                signinchange={this.switchSignInState}
                auth={auth}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
