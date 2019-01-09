import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import KeyIndicators from "./components/KeyIndicators";
import SideBar from "./components/SideBar";

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
