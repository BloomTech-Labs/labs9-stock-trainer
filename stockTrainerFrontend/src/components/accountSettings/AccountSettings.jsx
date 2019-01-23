import React, { Component } from "react";
import { Button, Form, Checkbox, Accordion, Icon } from "semantic-ui-react";
import "./AccountSettings.css";

import UpgradeUser from "../billing/Billing";

class AccountSettings extends Component {
  state = {
    email: "",
    phone: "",
    emailCheck: false,
    textCheck: false,
    oldPassword: "",
    newPassword: "",
    activeIndex: 0
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

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
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
      newPassword,
      activeIndex
    } = this.state;
    const { accessToken } = this.props;
    return (
      <Accordion styled className="settingsAccordion">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Settings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form size="large" onSubmit={this.handleSubmit}>
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
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Billing
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <UpgradeUser accessToken={accessToken} />
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default AccountSettings;
