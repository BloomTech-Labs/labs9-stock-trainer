import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Landing from "./components/Landing";

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
        <Landing />
      </div>
    );
  }
}

export default App;
