import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';

import './App.css';
import SideBar from './components/SideBar';
import TestComponent from './components/TestComponent';
import UpgradeUser from './components/billing/UpgradeUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <TestComponent />
        <StripeProvider apiKey="pk_test_12345">
          <UpgradeUser />
        </StripeProvider>
      </div>
    );
  }
}

export default App;
