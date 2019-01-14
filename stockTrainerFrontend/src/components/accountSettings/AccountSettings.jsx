import React, { Component } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import "./AccountSettings.css";

class AccountSettings extends Component {
  state = {
    email: "",
    phone: "",
    emailCheck: false,
    textCheck: false,
    oldPassword: "",
    newPassword: ""
  };

  handleSubmit = () => {
    const {
      email,
      phone,
      emailCheck,
      textCheck,
      oldPassword,
      newPassword
    } = this.state;
    if (oldPassword !== newPassword) {
      console.log("Passwords do not match");
    } else {
      console.log(email, phone, emailCheck, textCheck);
      // post request goes here
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEmail = () => {
    // e.target.id throws an error, and e.target.name does not work, want to find a way of reusability, but will
    // hold off for now
    this.setState(prevState => ({ emailCheck: !prevState.emailCheck }));
  };

  toggleText = () => {
    // e.target.id throws an error, and e.target.name does not work, want to find a way of reusability, but will
    // hold off for now
    this.setState(prevState => ({ textCheck: !prevState.textCheck }));
  };

  render() {
    const {
      email,
      phone,
      emailCheck,
      textCheck,
      oldPassword,
      newPassword
    } = this.state;
    return (
      <Form size="large" style={{ width: "25%" }} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Emails are permitted!"
            checked={emailCheck}
            onChange={this.toggleEmail}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Texts are permitted!"
            checked={textCheck}
            onChange={this.toggleText}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="oldPassword">
            Old Password
            <input
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={this.handleChange}
              type="password"
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="newPassword">
            New Password
            <input
              name="newPassword"
              value={newPassword}
              onChange={this.handleChange}
              type="password"
            />
          </label>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default AccountSettings;
