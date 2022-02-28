import React, { Fragment } from 'react'
import Navbutton from './Navbutton'
import LoginButtonGoogle from './LoginButtonGoogle'
import { NavbarStyled } from './Styled'


export default function Navbar() {
  return (
    <Fragment>
        <NavbarStyled>
            <Navbutton />
            <LoginButtonGoogle />  
        </NavbarStyled>
    </Fragment>
  )
}
