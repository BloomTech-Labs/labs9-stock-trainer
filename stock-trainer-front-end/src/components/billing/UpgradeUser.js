import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './UpgradeUser.css';

class App extends Component {
    render() {
        return <div className="upgrade-page">
            <div className="upgrade-info">
              <h3>Upgrade to StockTrainer Premium</h3>
              <p>Keep track of all your favorite stocks</p>
              <p>Look at all 5 of our fancy indicators</p>
              <p>We help you find stocks</p>
            </div>
            <StripeProvider apiKey="pk_test_rY8prrYy1Hij91qrNdI5zpYu">
              <div className="checkout-form">
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </div>;
    }
}

export default App;