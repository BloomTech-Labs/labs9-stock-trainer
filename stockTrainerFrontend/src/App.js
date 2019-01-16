import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";

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
      currentUser: "",
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

  switchSignInState = props => {
    const { tokenPayload } = props.auth.idTokenPayload;
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
    // this.setState({
    //   signedIn: true
    // });

    // eslint-disable-next-line no-undef
    // handleAuthentication = nextState => {
    //   if (/access_token|id_token|error/.test(nextState.location.hash)) {
    //     // eslint-disable-next-line no-undef
    //     auth.handleAuthentication();
    //   }
    // };
  };

  // handleAuthentication = (nextState, replace) => {
  //   if (/access_token|id_token|error/.test(nextState.location.hash)) {
  //     this.auth.handleAuthentication();
  //   }
  // };

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
                <SideBar {...props} />
                <UserInfo />
              </div>
            )}
          />
          <Route
            exact
            path="/settings"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <AccountSettings />
              </div>
            )}
          />
          <Route
            exact
            path="/billing"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <Billing />
              </div>
            )}
          />
          <Route
            exact
            path="/targets"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <Targets />
              </div>
            )}
          />
          <Route
            exact
            path="/reports"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <Reports />
              </div>
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <Dashboard />
              </div>
            )}
          />
          <Route
            exact
            path="/testrequest"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
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
                auth={props.auth}
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
