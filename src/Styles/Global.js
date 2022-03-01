import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: url(../images/workflowGuy.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: center;
        margin: 0;
        padding: 0;
    }
`

export const GlobalBackground = createGlobalStyle`
    body {
        background: linear-gradient(90deg ,hsla(250, 100%, 32%, 1), hsl(210, 84.8%, 51%));
        margin: 0;
        padding: 0;
        background-size: cover;
    }

`
