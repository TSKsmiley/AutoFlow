import React, { useContext } from 'react'
import Navbutton from './NavbarComponents/Navbutton'
import NavLoginButton from './NavbarComponents/NavLoginButton'
import { NavbarStyled } from '../../Styles/Styled'
import LogoutButtonGoogle from './NavbarComponents/LogoutButtonGoogle'
import { Context } from '../../Context'


export default function Navbar() {
  const { isLoggedIn } = useContext(Context);

  return (
      <NavbarStyled>
          <Navbutton />
          {isLoggedIn
            ? <LogoutButtonGoogle />
            : <NavLoginButton />
          }
      </NavbarStyled>
  )
}
