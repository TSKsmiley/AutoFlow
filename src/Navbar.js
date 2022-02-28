import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginButton = styled.button`
    color: white;
    background-color: black;
    float: right;
    cursor: pointer;
    height: 30px;
    width: 8%;
    text-align: center;
    margin: 10px;
`

const NavButton = styled.button`
    color: white;
    font-size: 32px;
    background-color: Transparent;
    border: none;
    float: left;
    cursor: pointer;
    height: 50px;
    width: 10%;
`

export default function Navbar() {

    const navigate = useNavigate();
    const RouteChange = () => {
        let path = `dinmor`
        navigate(path);
    }

  return (
    <Fragment>
        <div style={{
            backgroundImage: 'linear-gradient(hsl(207.5, 84.8%, 51%), hsla(207, 84%, 62%, 1))',
            height: '50px'
        }}>

            <NavButton type="button" onClick={RouteChange}>AutoFlow</NavButton>
            <LoginButton type="button">Login with Skype</LoginButton>
            

        </div>

    </Fragment>
  )
}
