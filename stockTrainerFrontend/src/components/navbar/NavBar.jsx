import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "" };
  }

  componentDidMount = () => {
    const { location } = this.props;
    this.setState({ activeItem: location.pathname });
  };

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    const { activeItem } = this.state;
    if (location.pathname !== activeItem) {
      this.setState({ activeItem: location.pathname });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="NavBar">
        <Menu stackable inverted fluid size="massive">
          <Menu.Item
            name="Dashboard"
            active={activeItem === "/dashboard"}
            to="dashboard"
            as={Link}
          />
          <Menu.Item
            name="Reports"
            active={activeItem === "/reports"}
            to="reports"
            as={Link}
          />
          <Menu.Item
            name="Settings"
            active={activeItem === "/settings"}
            to="settings"
            as={Link}
          />
          <Menu.Item
            name="Billing"
            active={activeItem === "/billing"}
            to="billing"
            as={Link}
          />
        </Menu>
      </div>
    );
  }
}
