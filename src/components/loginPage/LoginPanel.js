import React from 'react'
import LoginButtonGoogle from '../univeralComponents/LoginButtonGoogle'
import { LoginPanelStyled, LoginPanelHeader, FlowCenter } from '../../Styles/Styled'


export default function LoginPanel() {
    return (
        <>
            <LoginPanelStyled className='center'>
                <LoginPanelHeader className="font-link">Login</LoginPanelHeader>
                <FlowCenter className='center'>
                    <LoginButtonGoogle/>
                </FlowCenter>
            </LoginPanelStyled>
        </>
    )
}
