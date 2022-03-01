import React, { Fragment } from 'react'
import GoogleLogin from 'react-google-login'
import { FlowRight } from '../../Styles/Styled'
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from "react-router-dom";


export default function LoginButtonGoogle() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    navigate("/panel");
    console.log("Successfully logged in!");
    //console.log(response);
  }

  const logout = () => {
    navigate("/");
    console.log("Successfully logged out!");
  }

  return (
    <Fragment>
      <FlowRight>
        <GoogleLogin
          clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />

        <GoogleLogout
          clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
          buttonText="Logout"
          
          onLogoutSuccess = {logout}>
        </GoogleLogout>
      </FlowRight>
    </Fragment>
  )
}
