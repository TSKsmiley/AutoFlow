import styled from "styled-components";

export const LoginButton = styled.button`
  float: right;
  cursor: pointer;
  width: 8em;
  margin: 1.7em 1em auto auto;

  transition: all 0.5s ease;
  color: #fff;
  border: 3px solid white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 17px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
`;
export const LogoutButton = styled.div`
  float: right;
  margin: 1.7em 1em auto auto;
`;

export const NavButton = styled.button`
  color: white;
  font-size: 32px;
  background-color: Transparent;
  border: none;
  float: left;
  cursor: pointer;
  height: 50px;
  width: 1.25em;
  margin-left: 0.35em;
  margin-top: 25px;
`;

export const NavbarStyled = styled.div`
  background: linear-gradient(
    45deg,
    hsl(207.5, 84.8%, 51%),
    hsla(240, 84%, 62%, 1)
  );
  height: 100px;
  width: 100%;
`;

export const NavbarPanelStyled = styled.div`
  background-color: blue;
  width: 150px;
`;

export const CenterText = styled.div`
  text-align: center;
  position: absolute;
  top: 35%;
  bottom: 65%;
  width: 100%;
`;

export const AutoFlowLogoText = styled.h1`
  font-size: 128px;
  background: linear-gradient(
    45deg,
    hsl(190.5, 84.8%, 51%),
    hsla(240, 100%, 25%, 1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  -webkit-text-stroke: 0.0085em black;
  margin-bottom: 0px;
`;

export const AutoflowCatch = styled.h1`
  font-size: 36px;
  margin-top: 0px;
  color: white;
  -webkit-text-stroke: 0.0085em black;
`;

export const FlowRight = styled.div`
  float: right;
  margin-right: 0.35em;
  margin-top: 4px;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const FlowCenter = styled.div`
  cursor: pointer;

  &.center {
    position: absolute;
    transform: translate(-50%, -50%);
    margin-top: 45%;
    margin-left: 46%;
  }
`;

export const LoginPanelNavBar = styled.div`
  width: 100%;
  height: 12em;
  padding-top: 0px;
  margin-top: 0;
`;

export const LoginPanelStyled = styled.div`
  width: 20em;
  height: 35em;

  background: white;

  &.center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid lightgrey;
    border-radius: 15px;
    padding: 10px;
  }
`;
export const LoginPanelHeader = styled.h1`
  text-align: center;
  font-size: 3em;

  &.font-link {
    font-family: "Jost", sans-serif;
  }
`;

export const LoginPageLogoText = styled.h1`
  font-size: 7em;
  margin-top: 0px;
  color: #303030;
  -webkit-text-stroke: 0.0085em black;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 1px darkgrey;

  &.font-link {
    font-family: "Jost", sans-serif, 0, 900;
  }
`;
