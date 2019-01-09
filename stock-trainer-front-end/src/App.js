import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import Landing from "./components/Landing";
import SideBar from "./components/SideBar";
import Stock from "./components/Stock";
import Graph from "./components/Graph";
import Indicators from "./components/Indicators";
import Target from "./components/Target";


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
        <SideBar />
        <Route exact path="/" component={Landing} />
        <Route path="/stock" component={Stock} />
        <Route path="/graph" component={Graph} />
        <Route path="/indicators" component={Indicators} />
        <Route path="/target" component={Target} />
      </div>
    );
  }
}

export default App;
