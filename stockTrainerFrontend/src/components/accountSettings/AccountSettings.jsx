import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import "./AccountSettings.css";

import UpgradeUser from "../billing/Billing";

class AccountSettings extends Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { accessToken } = this.props;
    return (
      <>
        <Accordion styled className="settingsAccordion">
          <div>
            <div className="free">
              <h3>Free User</h3>
              <p>
                Save your favorite 12 stocks to your user profile or portfolio.
              </p>
            </div>
          </div>
          <div className="premimum">
            <h3>Premimum User</h3>
            <p>
              Save an unlimited amount of your favorite stocks to your
              portfolio.
            </p>
          </div>
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
      </>
    );
  }
}

export default AccountSettings;
