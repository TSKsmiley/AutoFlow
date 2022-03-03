import React, { Fragment } from 'react'
import Navbutton from '../univeralComponents/Navbutton'
import { NavbarPanelStyled } from '../../Styles/Styled'


export default function Navbar() {
  return (
    <Fragment>
        <NavbarPanelStyled>
            <Navbutton />
        </NavbarPanelStyled>
    </Fragment>
  )
}
