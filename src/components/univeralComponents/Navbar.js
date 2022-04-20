import React, { Fragment, useContext } from 'react'
import Navbutton from './NavbarComponents/Navbutton'
import NavLoginButton from './NavbarComponents/NavLoginButton'
import { NavbarStyled } from '../../Styles/Styled'
import NavbarPanel from './NavbarComponents/NavbarPanel'
import LogoutButtonGoogle from './NavbarComponents/LogoutButtonGoogle'
import { Context } from '../../Context'


export default function Navbar() {
  const { isLoggedIn, showPanelNav } = useContext(Context);

  return (
    <Fragment>
        <NavbarStyled>
            <Navbutton />
            {isLoggedIn
              ? <LogoutButtonGoogle />
              : <NavLoginButton />
            }
        </NavbarStyled>
    </Fragment>
  )
}
