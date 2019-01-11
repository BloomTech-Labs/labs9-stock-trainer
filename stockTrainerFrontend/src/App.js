import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";

import AccountSettings from "./components/accountSettings/AccountSettings";
import Landing from "./components/landing/Landing";
import KeyIndicators from "./components/keyindicators/KeyIndicators";
import Reports from "./components/reports/Reports";
import Targets from "./components/targets/Targets";
import Billing from "./components/billing/Billing";
import UserInfo from "./components/userinfo/UserInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      currentUser: "test user"
    };
  }

  render() {
    const { currentUser, signedIn } = this.state;
    return (
      <div className="App">
        <TopBar currentUser={currentUser} signedInState={signedIn} />
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
            path="/indicators"
            render={props => (
              <div className="lowerPageLayout">
                <SideBar {...props} />
                <KeyIndicators />
              </div>
            )}
          />
          <Route exact path="/" render={props => <Landing {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
