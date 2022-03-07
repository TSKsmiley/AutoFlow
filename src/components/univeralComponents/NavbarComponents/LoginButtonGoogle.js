import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import configData from "../../../config.json";

export default function LoginButtonGoogle() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(Context);

  const responseGoogle = (response) => {
    setIsLoggedIn(true);
    navigate("/panel");
    console.log("Successfully logged in!");
  };

  const responseGoogleFailed = (response) => {
    console.log("Failed logging in!");
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={configData.GOOGLE_TOKEN}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogleFailed}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      theme="dark"
    />
  );
}
