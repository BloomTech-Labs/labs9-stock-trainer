/* eslint-disable no-console */
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

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
      stockData: {},
      favorites: [""],
      modalOpen: false
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
    this.retrieveUser();
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
  };

  retrieveUser = () => {
    const { auth } = this.props;
    axios
      .request({
        method: "get", // I think this should be a get?
        baseURL: `${process.env.REACT_APP_BACKEND_URL}current_user/`, // so basically replace stock/ with whatever you need to hit. tthe first / is in the env file
        headers: {
          Authorization: `Bearer ${auth.accessToken}` // I'm pretty sure this is right, make sure it is before using it
        }
      })
      .then(res => {
        // your response is going to see the res here, including http code and whatever. res.data normally has whatever is given back to you
        // res.data();
        console.log(res);
        // this.switchSignInState({
        //   name: res.data.UserInfo
        // });
        this.setState({
          favorites: res.data.portfolio // eslint-disable-line react/no-unused-state
        });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err); // for errors
        this.handleOpen();
      });
  };

  retrieveStock = async (nameOfStock, startDate, endDate, fields) => {
    const { stockData } = this.state;
    const { auth } = this.props;

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
    return axios
      .request({
        method: "get",
        baseURL: `${process.env.REACT_APP_BACKEND_URL}stock/`,
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
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
        return res;
      })
      .catch(err => {
        // this is a new error message that pops up on failure
        this.handleOpen();

        console.log(err);
      });
  };

  favoriteToggle = stockSymbol => {
    const { auth } = this.props;
    if (!auth.isAuthenticated()) {
      console.log("You gotta be logged in");
      return;
    }
    axios
      .request({
        method: "post",
        baseURL: `${process.env.REACT_APP_BACKEND_URL}add_favorite/`,
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        },
        data: { symbol: stockSymbol }
      })
      .then(res => {
        this.setState({
          favorites: res.data.favorites
        });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err); // for errors
        // this.handleOpen();
      });
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { auth } = this.props;
    const { currentUser, signIn, stockData, favorites, modalOpen } = this.state;
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
                <AccountSettings accessToken={auth.accessToken} />
              </div>
            )}
          />
          <Route
            exact
            path="/reports/:stockSymbol?"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Reports
                  favoriteToggle={this.favoriteToggle}
                  retrieveStock={this.retrieveStock}
                  stockData={stockData}
                  favorites={favorites}
                  {...props}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <div className="lowerPageLayout">
                <NavBar {...props} />
                <Dashboard
                  favoriteToggle={this.favoriteToggle}
                  favorites={favorites}
                />
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
          <Route
            exact
            path="/"
            render={props => <Landing {...props} stockData={stockData} />}
          />
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
        <Modal open={modalOpen} onClose={this.handleClose}>
          <Header icon="browser" content="Error" />
          <Modal.Content>
            <h3>Unable to get requested data</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default withRouter(App);
