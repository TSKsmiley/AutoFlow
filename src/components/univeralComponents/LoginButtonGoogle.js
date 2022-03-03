import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from "react-router-dom";


export default function LoginButtonGoogle() {
  const navigate = useNavigate();
  const [isLoggedIn, setSignedIn] = useState(false);

  const responseGoogle = (response) => {
    setSignedIn(true)
    console.log(isLoggedIn);
    // navigate("/panel");
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