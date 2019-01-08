import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     signedIn: false,
     currentPage: "home",
     currentUser:"test user"

    };
  }
  render() {
    return (
      <div className="App">
        <TopBar currentUser={this.state.currentUser} currentPage={this.state.home} signedInState = {this.state.signedIn}/>
      </div>
    );
  }
}

export default App;
