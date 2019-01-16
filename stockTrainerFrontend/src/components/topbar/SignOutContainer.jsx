import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
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

  signOut = props => {
    this.handleClose();
    props.signOutFunc();
  };

  render() {
    const { currentUser } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="signoutContainer">
        <div className="currentUserText">{currentUser}</div>
        <div>
          <Modal
            open={modalOpen}
            dimmer="blurring"
            trigger={
              <Button onClick={this.handleOpen} size="big" secondary>
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
        </div>
      </div>
    );
  }
}

export default SignedOutContainer;
