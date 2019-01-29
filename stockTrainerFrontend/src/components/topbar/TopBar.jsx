import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SignInContainer from "./SignInContainer";
import SignOutContainer from "./SignOutContainer";

import "./TopBar.css";

const TopBar = props => {
  const {
    signedInState,
    currentUser,
    signOutFunc,
    signInFunc,
    register,
    toggleNav
  } = props;
  return (
    <div className="topBarContainer">
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <Logo />
        </Link>
      </div>
      <div>
        {signedInState ? (
          <SignOutContainer
            signOutFunc={signOutFunc}
            currentUser={currentUser}
            toggleNav={toggleNav}
          />
        ) : (
          <SignInContainer signInFunc={signInFunc} register={register} />
        )}
      </div>
    </div>
  );
};

export default TopBar;
