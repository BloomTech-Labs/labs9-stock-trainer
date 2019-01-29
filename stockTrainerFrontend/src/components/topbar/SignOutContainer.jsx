import React from "react";
import { Button, Modal, Icon, Responsive } from "semantic-ui-react";
import "./SignoutContainer.css";
// import Auth from "../../Auth/Auth";

class SignedOutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  handleClose = () => this.setState({ modalOpen: false });

  handleOpen = () => this.setState({ modalOpen: true });

  signOut = () => {
    const { signOutFunc } = this.props;
    this.handleClose();
    signOutFunc();
  };

  render() {
    const { currentUser, toggleNav } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="signoutContainer">
        <Responsive minWidth={768}>
          <div className="currentUserText">{currentUser}</div>
        </Responsive>
        <Responsive minWidth={768}>
          <Modal
            open={modalOpen}
            dimmer="blurring"
            trigger={
              <Button onClick={this.handleOpen} size="large" secondary>
                Sign Out
              </Button>
            }
          >
            <Modal.Header>
              <h1>Logout?</h1>
            </Modal.Header>
            <Modal.Content>
              <h3>Are you sure you want to logout of your account</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleClose} color="red" inverted>
                <Icon name="remove" /> No
              </Button>

              <Button onClick={this.signOut} color="green" inverted>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Responsive>
        <Responsive maxWidth={768}>
          <Button id="logout" onClick={toggleNav} secondary>
            <Icon size="large" name="bars" />
          </Button>
        </Responsive>
      </div>
    );
  }
}

export default SignedOutContainer;
