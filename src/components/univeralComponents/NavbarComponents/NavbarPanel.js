import React, { Fragment, useContext } from 'react'
import { NavbarPanelTableStyled, NavbarPanelStyled } from '../../../Styles/Styled'
import { Context } from '../../../Context'


export default function NavbarPanel() {
  return (
      <NavbarPanelStyled>
        <NavbarPanelTableStyled>
            <thead>
                <tr>
                    <td style={{width: "33%"}}>Ass</td>
                    <td style={{width: "33%"}}>Titties</td>
                    <td style={{width: "33%"}}>Windows XP</td>
                </tr>
            </thead>
        </NavbarPanelTableStyled>
     </NavbarPanelStyled>
  )
}