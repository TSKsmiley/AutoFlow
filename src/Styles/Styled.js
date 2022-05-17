import styled from "styled-components";

const GlobalButtonStyle = styled.button`
  cursor: pointer;
  border: none;
`

export const LoginButton = styled(GlobalButtonStyle)`
  width: 8em;
  margin: 0 1em auto auto;

  transition: all 0.5s ease;
  color: black;
  border: 3px solid black;
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

export const NavButton = styled(GlobalButtonStyle)`
  color: black;
  font-size: 32px;
  background-color: Transparent;
  float: left;
  height: 50px;
  margin-left: 0.35em;
  width: 5%;
`;

export const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  background: #f9dab4;
  height: 12vh;
  width: 100%;
`;

export const NavbarPanelStyled = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const NavbarPanelTableStyled = styled.nav`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  display: grid;
  /* Ændre 3 tallet til antal kolloner i jeres navbar */
  grid-template-columns: repeat(0,1fr);
  grid-auto-flow: column;
  position: relative;
  height: 100%;
  margin: auto;
  text-align: center;
`;

export const CenterText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;

`;

export const AutoFlowLogoText = styled.h1`
  font-size: 10vmin;
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

export const Box = styled.div`
  height: 6em;
  max-height: 6em;
  width: 20vw;
  min-width: 8em;
  background: linear-gradient(90deg, #FFB703 10%, #FB8500), transparent;
  box-shadow: 0 3px 11px rgba(28, 28, 28, 0.4);
  padding: 0.25em;
  overflow: hidden;
  position: relative;
  margin-top: 1em;

  @media (max-width: 768px) {
    width: 80vw;
  }
  
`;

export const AddButton = styled(GlobalButtonStyle)`
  border: 2px solid lightgrey;
	background: linear-gradient(90deg, #FFB703 20%, #FB8500), transparent;
  box-shadow: 0 3px 11px rgba(28, 28, 28, 0.55);
	font-size: 22px;
	height: 2.5em;
	width: 2.5em;
	border-radius: 999px;
	position: relative;
  margin-top: 1em;
  justify-content: center;
	
	&:after,
	&:before {
		content: "";
		display: block;
		background-color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	&:before {
		height: 1em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 1em;
	}
`;

export const MainPanelGrid = styled.div`
  width: 40%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  place-items: center;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CreatePanelBox = styled.div`
  display: grid;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5em;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  place-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const LeftText = styled.h3`
  margin: 0;
  margin-top: 0.25em;
  width: 80%;
  display: inline-block;
  //max-width: 60%;
  font-size: 0.9em;
  color: white;
  text-shadow: 0 2px 1px rgba(28, 28, 28, 0.55);;
`

export const RightText = styled.h3`
  float: right;
  margin-top: 0.5em;
  margin-right: 0.25em;

`

export const CopyButton = styled(GlobalButtonStyle)`
  border-radius: 8px;
  border: 1.5px solid white;
  background: none;
  color: #FFFFFF;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 100%;
  font-weight: 700;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  padding: 0.15em 0;
  width: 80%;
  white-space: nowrap;
  display: grid;
  place-content: center;
  &:hover{
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }

`

export const DeleteButton = styled(GlobalButtonStyle)`

  font-family:'Open Sans';
  font-size: 16px;
  font-weight: 700;
  display: grid;
  place-items: center;
  color:#FFF;
  border-radius: .25em;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.4);
  background: rgb(192, 57, 43);
  margin: 0 0.25em 0 auto;
  height: 1.5em;
  width: 1.5em;
  &:hover {
    background: darken(rgb(192, 57, 43), 10%);
  }

`
export const CreateFlowGrid = styled.div`
  display: grid;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  place-items: center;
  position: relative;
  height: 100%;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const WebPanelBackground = styled.div`
  color: white;
`

export const PriorityText = styled.h2`
  margin-left: 6em;
  margin-top: 3em;
  margin-bottom: 0em;
`

export const CreateFlowButton = styled(GlobalButtonStyle)`
  color: white;
  background-color: transparent;
  border: 4px solid green;
  padding: 0.75em 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;

  &:hover {
    background-color: green;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`

export const FlowFlex = styled.div`
  display: flex;
`

export const BlueBackground = styled.section`
  background: hsla(200, 93%, 49%, 1);
  background: linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);
  background: -moz-linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);
  background: -webkit-linear-gradient(225deg, hsla(200, 93%, 49%, 1) 0%, hsla(225, 89%, 47%, 1) 90%);
  background-size: cover;
  border-radius: 1.25em 1.25em 0px 0px;
  min-height: 88vh;
  overflow: hidden;
  padding-bottom: 5vh;
`

export const DropdownDiv = styled.div`
  border: 1px solid white;
  padding: 0.75em 0.5em;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;

`