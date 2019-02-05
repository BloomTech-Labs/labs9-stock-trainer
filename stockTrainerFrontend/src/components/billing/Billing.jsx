import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import "./UpgradeUser.css";

const UpgradeUser = props => {
  const { accessToken } = props;
  return (
    <div className="upgradePage">
      <div className="upgradeInfo">
        <h3>Upgrade to StockTrainer Premium</h3>
        <p>Keep track of all your favorite stocks with unlimited favorites!</p>
      </div>
      {/* make sure to have your stripe api key set */}
      <StripeProvider
        apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_TEST_KEY}
      >
        <div className="checkoutForm">
          <Elements>
            <CheckoutForm accessToken={accessToken} />
          </Elements>
        </div>
      </StripeProvider>
    </div>
  );
};
export default UpgradeUser;
