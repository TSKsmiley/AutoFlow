import React, { Fragment, useContext } from 'react'
import Navbutton from './Navbutton'
import NavLoginButton from './NavLoginButton'
import { NavbarStyled } from '../../Styles/Styled'
import LogoutButtonGoogle from './LogoutButtonGoogle'
import { Context } from '../../Context'


export default function Navbar() {
  const { isLoggedIn } = useContext(Context);

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
