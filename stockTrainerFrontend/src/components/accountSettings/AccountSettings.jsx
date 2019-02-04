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
            <div className="infoSettings">
              <h3>Free User</h3>
              <p>Save your favorite 10 stocks to your user profile.</p>
            </div>

            <div className="infoSettings">
              <h3>Premium User</h3>
              <p>
                Save an unlimited amount of your favorite stocks to your
                portfolio.
              </p>
            </div>
          </div>
          <br />
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <h3>
              <Icon name="dropdown" /> Billing
            </h3>
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
