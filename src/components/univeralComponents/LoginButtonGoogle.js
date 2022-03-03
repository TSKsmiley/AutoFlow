import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context';


export default function LoginButtonGoogle() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(Context);

  const responseGoogle = (response) => {
    setIsLoggedIn(true);
    navigate("/panel");
    console.log("Successfully logged in!");
  }

  const responseGoogleFailed = (response) => {
    console.log("Failed logging in!");
    console.log(response);
  }

  return (
        <GoogleLogin
          clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFailed}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
  )
}