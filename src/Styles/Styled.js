import styled from "styled-components";

export const LoginButton = styled.button`
  float: right;
  cursor: pointer;
  width: 8em;
  margin: 0 1em auto auto;

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
  margin-left: 0.35em;
  width: 5%;
`;

export const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    45deg,
    hsl(207.5, 84.8%, 51%),
    hsla(240, 84%, 62%, 1)
  );
  height: 100px;
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
  max-width: 14em;
  background-color: coral;
  &:first-child{
    margin-top: 1em;
  }
`;

export const AddButton = styled.button`
  border: 2px solid lightgrey;
	background-color: coral;
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
		background-color: grey;
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
  /* Ændre width */
  width: 40%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  /* Ændre 3 tallet til antal kolloner i jeres navbar */
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  place-items: center;
  position: relative;
  height: 100%;
  text-align: center;
`;

export const CreatePanelBox = styled.div`
  margin-top: 5%;
  margin-left: 40%;
  margin-right: 40%;
  justify-content: center;
  height: 50%;

`

export const LeftText = styled.h3`
  float: left;
  margin-left: 0.25em;
  margin-top: 0.25em;

`

export const RightText = styled.h3`
  float: right;
  margin-top: 0.5em;
  margin-right: 0.25em;

`

export const CopyButton = styled.button`
  margin-bottom: 1.25em;
  justify-content: center;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  height: 1.5rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover{
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
  }

`

export const DeleteButton = styled.button`

  font-family:'Open Sans';
  font-size: 16px;
  font-weight:400;
  display:inline-block;
  color:#FFF;
  border-radius: .25em;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.4);
  background: rgb(192, 57, 43);
  float: right;
  margin-right: 0.25em;
  margin-top: 0.25em;
  &:before {
    content: "X";
  }
  &:hover {
    background: darken(rgb(192, 57, 43), 10%);
  }

`
export const CreateFlowGrid = styled.div`
  display: grid;
  margin-top: 5em;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  /* Ændre 3 tallet til antal kolloner i jeres navbar */
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  place-items: center;
  position: relative;
  height: 100%;
  text-align: center;
`