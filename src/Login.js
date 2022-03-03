import React from 'react'

import LoginPanel from './components/loginPage/LoginPanel'
import { LoginPageLogoText, LoginPanelNavBar } from './Styles/Styled'
import { LoginBackground } from './Styles/Global'


export default function Login() {
  return (
    <>
      <LoginBackground/>
        <LoginPanelNavBar>
          <LoginPageLogoText className = "font-link">AutoFlow</LoginPageLogoText>
        </LoginPanelNavBar>

        <LoginPanel/>
    </>
  )
}
