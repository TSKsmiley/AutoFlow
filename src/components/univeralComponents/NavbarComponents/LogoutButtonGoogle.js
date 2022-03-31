import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../../../Styles/Styled";
import { Context } from "../../../Context";
import configData from "../../../config.json";

export default function LogoutButtonGoogle() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(Context);

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear();
    navigate("/");
    console.log("Successfully logged out!");
  };

  return (
    <LogoutButton>
      <GoogleLogout
        clientId={configData.GOOGLE_TOKEN}
        buttonText="Logout with Google"
        onLogoutSuccess={logout}
        theme="dark"
      ></GoogleLogout>
    </LogoutButton>
  );
}
