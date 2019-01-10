import React, { Component } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import KeyIndicators from "./components/keyindicators/KeyIndicators";

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
        <div className="lowerPageLayout">
          <SideBar />
          <KeyIndicators />
        </div>
      </div>
    );
  }
}

export default App;
