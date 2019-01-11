import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: true,
      currentUser: "test user"
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

  render() {
    const { currentUser, signedIn } = this.state;
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
          <Route exact path="/" render={props => <Landing {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
