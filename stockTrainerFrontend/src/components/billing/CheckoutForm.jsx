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
    this.state = {
      complete: false,
      error: false,
      cardNumber: false,
      cvc: false,
      expiry: false,
      zip: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { cardNumber, cvc, expiry, zip } = this.state;
    if (!cardNumber || !cvc || !expiry || !zip) {
      console.log("need all fields");
      this.setState({ error: true });
      return;
    }

    const { stripe, accessToken } = this.props;
    const { token } = await stripe.createToken({ name: "Name" }); // can add more userinfo here
    const url = "http://localhost:8000/charge/"; // "django_url/charge/"

    // our post request currently sends the token and name to our backend
    // we can change what user info we send to our backend to connect user to payment
    // token contains card information, and the stripe call is done on the backend
    // header contains the user token, which allows our backend to identify the user
    // within the database. This is not protected for now, but should be implemented
    const headers = {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${accessToken}`
    };
    axios
      .post(
        `${url}`,
        {
          token: token.id,
          name: "jhk"
        },
        {
          headers
        }
      )
      .then(response => {
        if (response.status === 200) this.setState({ complete: true });
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      this.setState({ [name]: true });
    }
  };

  render() {
    const { complete, error } = this.state;
    if (complete === true) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>$9.99/month</p>
        <form onSubmit={this.handleSubmit}>
          <p>Card number</p>
          <CardNumberElement
            onChange={element =>
              this.stripeElementChange(element, "cardNumber")
            }
          />
          <p>Expiration date</p>
          <CardExpiryElement
            onChange={element => this.stripeElementChange(element, "expiry")}
          />
          <p>CVC</p>
          <CardCVCElement
            onChange={element => this.stripeElementChange(element, "cvc")}
          />
          <p>Zip code</p>
          <PostalCodeElement
            onChange={element => this.stripeElementChange(element, "zip")}
          />
          {error ? <p>Please make sure every field is filled in</p> : null}
          <button type="submit">Pay</button>
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
