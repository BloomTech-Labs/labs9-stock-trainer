import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class SignedOutContainer extends Component {
  render() {
    return (
      <div className="signoutContainer">
        <div className="currentUserText">{this.props.currentUser}</div>
        <Button size='big' basic>Sign Out</Button>
      </div>
    )
  }
}
