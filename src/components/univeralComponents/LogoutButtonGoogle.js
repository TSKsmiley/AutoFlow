import React, { Fragment, useContext } from 'react'
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from "react-router-dom";
import { LogoutButton } from '../../Styles/Styled';
import { Context } from '../../Context';

export default function LogoutButtonGoogle() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(Context);

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
    console.log("Successfully logged out!");
  }

  return (
    <LogoutButton>
      <GoogleLogout
        clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
        buttonText="Logout"
        
        onLogoutSuccess = {logout}>
      </GoogleLogout>
    </LogoutButton>
  )
}

