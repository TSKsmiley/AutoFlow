import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { NavButton } from '../../../Styles/Styled'
import { Context } from '../../../Context'


export default function Navbutton() {
  
  const { isLoggedIn } = useContext(Context);
  
  function returnLinkTo() {
     if (isLoggedIn) {
      return "/panel";
    }
    return "/";
  }

  return (
    <Link to= {returnLinkTo}>
        <NavButton type="button">AutoFlow</NavButton>
    </Link>
  )
}
