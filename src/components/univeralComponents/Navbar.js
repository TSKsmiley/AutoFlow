import React, { Fragment } from 'react'
import Navbutton from './Navbutton'
import NavLoginButton from './NavLoginButton'
import LoginButtonGoogle from './LoginButtonGoogle'
import { NavbarStyled } from '../../Styles/Styled'


export default function Navbar() {
  return (
    <Fragment>
        <NavbarStyled>
            <Navbutton />
            <NavLoginButton />
        </NavbarStyled>
    </Fragment>
  )
}
