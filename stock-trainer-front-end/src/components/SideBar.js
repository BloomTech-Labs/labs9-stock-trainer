import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./SideBar.css";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Dashboard" };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="SideBar">
        <p>Home &gt; {activeItem}</p>
        <Menu ui vertical fluid left size="massive">
          <Menu.Item
            name="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Reports"
            active={activeItem === "Reports"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Targets"
            active={activeItem === "Targets"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Settings"
            active={activeItem === "Settings"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Billing"
            active={activeItem === "Billing"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
