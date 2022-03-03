import React, { Fragment } from 'react'
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from "react-router-dom";

export default function LogoutButtonGoogle() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    console.log("Successfully logged out!");
  }

  return (
    <Fragment>
        <GoogleLogout
          clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
          buttonText="Logout"
          
          onLogoutSuccess = {logout}>
        </GoogleLogout>
    </Fragment>
  )
}

