import React from 'react'
import { Link } from 'react-router-dom'
import { NavButton } from './Styled'

export default function Navbutton() {
  return (
    <Link to="/dinmor">
        <NavButton type="button">AutoFlow</NavButton>
    </Link>
  )
}
