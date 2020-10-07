import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import logo from "../images/bytelion-logo.png";
import { Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Navbar = () => {
  const [name, setName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const onLoginSuccess = (response) => {
    setName(response.profileObj.name);
    setImageUrl(response.profileObj.imageUrl);
    setLoginSuccess(true);
  };

  const onLoginFailure = (response) => {
    setLoginFailure(true);
  };

  return (
    <Row className="nav-row">
      <Col md="6">
        <img src={logo} alt="Bytelion Logo" className="logo" />
      </Col>
      <Col md="6">
        {loginSuccess ? (
          <div className="user-info">
            <p className="welcome-msg">Welcome, {name}</p>
            <img src={imageUrl} alt="User" className="profile-pic" />
            <GoogleLogout
              clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={() => setLoginSuccess(false)}
            ></GoogleLogout>
          </div>
        ) : (
          <GoogleLogin
            clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
            buttonText={
              loginFailure ? "Error. Please try again." : "Sign in with Google"
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
