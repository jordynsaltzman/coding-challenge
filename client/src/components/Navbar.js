import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import logo from "../images/bytelion-logo.png";
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, loginFailure, userLogout } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLoginSuccess = (response) => {
    dispatch(loginSuccess(response.profileObj));
  };

  const onLoginFailure = (response) => {
    dispatch(loginFailure(response.error));
  };

  const onLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Row className="nav-row">
      <Col md="6">
        <a href="/">
          <img src={logo} alt="Bytelion Logo" className="logo" />
        </a>
      </Col>
      <Col md="6">
        {loggedIn ? (
          <div className="user-info">
            <p className="welcome-msg">Welcome, {user.name}</p>
            <img src={user.imageUrl} alt="User" className="profile-pic" />
            <GoogleLogout
              clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={onLogout}
              icon={false}
              className="login-btn"
            ></GoogleLogout>
          </div>
        ) : (
          <GoogleLogin
            clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
            buttonText={
              error ? "Error. Please try again." : "Sign in with Google"
            }
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            className="login-btn"
          />
        )}
      </Col>
    </Row>
  );
};

export default Navbar;
