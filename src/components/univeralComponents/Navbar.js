import React, { Fragment } from 'react'
import Navbutton from './Navbutton'
import NavLoginButton from './NavLoginButton'
import { NavbarStyled } from '../../Styles/Styled'
import LogoutButtonGoogle from './LogoutButtonGoogle'
import LoginButtonGoogle from './LoginButtonGoogle'


export default function Navbar() {
  return (
    <Fragment>
        <NavbarStyled>
            <Navbutton />
            {0
              ? <LogoutButtonGoogle />
              : <NavLoginButton />
            }
        </NavbarStyled>
    </Fragment>
  )
}
