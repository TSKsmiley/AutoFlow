import React from 'react'
import LoginPanel from './LoginPanel'
import { LoginPageLogoText, LoginPanelNavBar, LoginPageBody } from '../../Styles/Styled'

export default function Login() {
  return (
    <>
    
      <LoginPageBody>
        <LoginPanelNavBar>
          <LoginPageLogoText>AutoFlow</LoginPageLogoText>
        </LoginPanelNavBar>
        
        <LoginPanel/>
      </LoginPageBody>
    </>
  )
}
