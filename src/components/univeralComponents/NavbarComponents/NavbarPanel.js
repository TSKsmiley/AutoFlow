import React from "react";
import {
  NavbarPanelTableStyled,
  NavbarPanelStyled,
} from "../../../Styles/Styled";

export default function NavbarPanel() {
  return (
    <NavbarPanelStyled>
      <NavbarPanelTableStyled>
        <div>Home</div>
        <div>Flows</div>
        <div>Create Flows</div>
      </NavbarPanelTableStyled>
    </NavbarPanelStyled>
  );
}
