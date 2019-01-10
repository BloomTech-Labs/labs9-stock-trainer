import React, { Component } from "react";
import axios from "axios";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { stripe } = this.props;
    const { token } = { stripe }.createToken({ name: "Name" });
    const url = "http://localhost:3000/billing";

    axios
      .post(`${url}`, {
        headers: { "Content-Type": "text/plain" },
        body: token.id
      })
      .then(response => {
        if (response.ok) this.setState({ complete: true });
        console.log(response);
      });
  }

  render() {
    const { complete } = this.state;
    if ({ complete } === true) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>$9.99/month</p>
        <form onSubmit={this.handleSubmit}>
          <p>Card number</p>
          <CardNumberElement />
          <p>Expiration date</p>
          <CardExpiryElement />
          <p>CVC</p>
          <CardCVCElement />
          <p>Zip code</p>
          <PostalCodeElement />
          <button type="button">Pay</button>
        </form>
        <p>
          Your subscription will automatically renew every month. You will be
          charged $9.99 on each renewal until you cancel in the billing
          settings. If you cancel, previous charges will not be refunded, but
          you may continue to use the service until the end of the term you paid
          for. Unless I can&apos;t figure out how to implement that then you
          will just lose your premium service immediately.
        </p>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
