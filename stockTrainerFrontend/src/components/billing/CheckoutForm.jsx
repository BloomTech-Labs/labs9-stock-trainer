import React, { Component } from "react";
import axios from "axios";
import { Button, Header } from "semantic-ui-react";

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
      this.setState({ error: true });
      return;
    }

    const { stripe, accessToken } = this.props;
    const { token } = await stripe.createToken({ name: "Name" }); // can add more userinfo here
    const url = `${process.env.REACT_APP_BACKEND_URL}charge/`; // "django_url/charge/"

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
          token: token.id
        },
        {
          headers
        }
      )
      .then(response => {
        if (response.status === 200) this.setState({ complete: true });
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };

  stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      this.setState({ [name]: true });
    }
  };

  render() {
    const { complete, error } = this.state;
    if (complete === true)
      return (
        <Header as="h1" textAlign="center" style={{ marginTop: "20px" }}>
          Purchase Complete!
        </Header>
      );
    return (
      <div className="checkout">
        <p>$9.99 for a lifetime of premium </p>
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
          <Button secondary type="submit">
            Pay
          </Button>
        </form>
        <br />
        <p>
          Transactions will be processed through Stripe, and we will not store
          your payment information.
        </p>
        <p>
          This is a one time payment for premium status. We thank you for the
          support while our app is in the early stages. Upgrading to premium
          status today will make you a lifetime premium member.
        </p>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
