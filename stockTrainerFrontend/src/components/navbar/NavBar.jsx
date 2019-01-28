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
    const { signout } = this.props;
    return (
      <div className="NavBar">
        <Menu stackable inverted fluid size="massive">
          <Menu.Item
            name="Dashboard"
            active={activeItem === "/dashboard"}
            // you need this / in the to field or this will break on the help page!
            to="/dashboard"
            as={Link}
          />
          <Menu.Item
            name="Reports"
            active={activeItem.substring(0, 8) === "/reports"}
            to="/reports"
            as={Link}
          />
          <Menu.Item
            name="Help"
            active={activeItem.substring(0, 5) === "/help"}
            to="/help"
            as={Link}
          />
          <Menu.Item
            name="Settings"
            active={activeItem === "/settings"}
            to="/settings"
            as={Link}
          />
          <Menu.Item name="Sign Out" onClick={signout} />
        </Menu>
      </div>
    );
  }
}
