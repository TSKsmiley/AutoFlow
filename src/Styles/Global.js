import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: url(../images/workflowGuy.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: center;
    }
`

export const GlobalBackground = createGlobalStyle`
    body {
        background: #f9dab4;
    }

`

export const LoginBackground = createGlobalStyle`
    body {
        height: 100%;
        background-image: url(../images/loginBackground.svg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
`

