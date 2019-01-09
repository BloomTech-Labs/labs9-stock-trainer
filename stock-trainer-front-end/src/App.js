import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TestComponent from './components/TestComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <TestComponent/>
      </div>
    );
  }
}

export default App;
