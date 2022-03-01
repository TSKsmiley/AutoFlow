import React from 'react'
import { Link } from 'react-router-dom'
import { LoginButton } from '../../Styles/Styled'

export default function NavLoginButton() {
  return (
    <Link to="/login">
        <LoginButton type="button">Login</LoginButton>
    </Link>
  )
}
