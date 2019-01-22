import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import NavBar from "./components/navbar/NavBar";

import AccountSettings from "./components/accountSettings/AccountSettings";
import Landing from "./components/landing/Landing";

import Reports from "./components/reports/Reports";
import UserInfo from "./components/userinfo/UserInfo";
import Dashboard from "./components/dashboard/Dashboard";
import Help from "./components/help/Help";
import NoMatch from "./components/nomatch/NoMatch";
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
    const { auth, history } = this.props;
    auth.signOut();
    this.setState({ signIn: false }, () => {
      history.push("/");
    });
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
    this.setState({
      signIn: true,
      currentUser: nameToSet
    });
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

  retrieveStock = (nameOfStock, startDate, endDate, fields) => {
    // this jwt is not actually where this is stored, it's a placeholder
    const { jwt, stockData } = this.state;
    // setting up for what we're grabbing from the backend, the ifs make it so those are optional. Defaults on the backend are currently 01-01-18 for date, and closing price
    const paramSettings = {
      NAME: nameOfStock
    };
    if (startDate) {
      paramSettings.STARTDATE = startDate;
    }
    if (endDate) {
      paramSettings.ENDDATE = endDate;
    }
    if (fields) {
      paramSettings.FIELDS = fields;
    }
    axios
      .request({
        method: "get",
        baseURL: `${process.env.REACT_APP_BACKEND_URL}stock/`,
        headers: {
          Authorization: `Bearer ${jwt}`
        },
        params: paramSettings
      })
      .then(res => {
        // res.data example
        //   {
        //     "symbol": "GOOG",
        //     "startDate": "2018-01-01",
        //     "endDate": "2018-01-02",
        //     "data": [
        //         {
        //             "date": "2018-01-02",
        //             "open": "1048.34",
        //             "close": "1065.0",
        //             "low": "1045.23",
        //             "high": "1066.94",
        //             "exdividend": "0.0",
        //             "volume": "1223114.0",
        //             "splitRatio": "1.0",
        //             "adjHigh": "1066.94",
        //             "adjOpen": "1048.34",
        //             "adjClose": "1065.0",
        //             "adjLow": "1045.23",
        //             "adjVolume": "1223114.0"
        //         }
        //     ]
        // }
        const newState = { ...stockData };
        // Unsure if I should make this add on if the symbol already excists or just wipe it like it does here
        newState[res.data.symbol] = {
          symbol: res.data.symbol,
          data: res.data.data
        };
        this.setState({
          stockData: newState
        });
      })
      .catch(err => {
        console.log(err);
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
          register={this.register}
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
              <Callback
                signinchange={this.switchSignInState}
                auth={auth}
                {...props}
              />
            )}
          />
          <Route
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <NoMatch />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
