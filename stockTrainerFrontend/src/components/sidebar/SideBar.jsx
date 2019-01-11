import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./SideBar.css";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "" };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  componentDidMount = () => {
    const { location } = this.props;
    this.setState({ activeItem: location.pathname });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="SideBar">
        <Menu vertical fluid size="massive">
          <Menu.Item
            name="Dashboard"
            active={activeItem === "/indicators"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Reports"
            active={activeItem === "/reports"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Targets"
            active={activeItem === "/targets"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Settings"
            active={activeItem === "/settings"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Billing"
            active={activeItem === "/billing"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
