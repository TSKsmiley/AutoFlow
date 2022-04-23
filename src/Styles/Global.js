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
        background: hsla(200, 93%, 49%, 1);

        background: linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);

        background: -moz-linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);

        background: -webkit-linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);

        background-size: cover;
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

