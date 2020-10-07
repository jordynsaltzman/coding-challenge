import React, { useState } from "react";
import GoogleLogin from "react-google-login";

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
    <div>
      {loginSuccess ? (
        <div>
          <p>{name}</p>
          <img src={imageUrl} alt="Profile Picture" />
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
        />
      )}
    </div>
  );
};

export default Navbar;
