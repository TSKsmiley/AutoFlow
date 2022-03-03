import React from 'react'

import LoginPanel from './components/loginPage/LoginPanel'
import { LoginPageLogoText, LoginPanelNavBar, LoginPageBody } from './Styles/Styled'
import { GlobalBackground } from './Styles/Global'


export default function Login() {
  return (
    <>
      <GlobalBackground>
        <LoginPageBody>
          <LoginPanelNavBar>
            <LoginPageLogoText>AutoFlow</LoginPageLogoText>
          </LoginPanelNavBar>

          <LoginPanel/>
        </LoginPageBody>
      </GlobalBackground>
    </>
  )
}
