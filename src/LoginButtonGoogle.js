import React, { Fragment } from 'react'
import GoogleLogin from 'react-google-login'
import { FlowRight } from './Styles/Styled'


export default function LoginButtonGoogle() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <Fragment>
      <FlowRight>
        <GoogleLogin
          clientId="258375953305-7j1t10b7nlkrlgclfm94a86q55k3v5d9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </FlowRight>
    </Fragment>
  )
}
