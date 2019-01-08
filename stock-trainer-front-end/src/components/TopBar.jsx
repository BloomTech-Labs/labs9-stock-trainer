import React, { Component } from 'react'
import Logo from './Logo';
import SignedOutContainer from './SignedOutContainer';
import SignInContainer from './SignInContainer';

export default class TopBar extends Component {
  render() {
    return (
      <div className="topBarContainer">
        <Logo/>
        <SignInContainer />
        {/* <SignedOutContainer currentUser = {this.props.currentUser}/> */}
      </div>
    )
  }
}
