import React from 'react'
import { Link } from 'react-router-dom'
import { NavButton } from './Styles/Styled'

export default function Navbutton() {
  return (
    <Link to="/">
        <NavButton type="button">AutoFlow</NavButton>
    </Link>
  )
}
