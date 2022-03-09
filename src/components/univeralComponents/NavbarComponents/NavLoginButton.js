import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../../../Styles/Styled";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-left: auto;
`;
export default function NavLoginButton() {
  return (
    <StyledLink to="/login">
      <LoginButton type="button">Login</LoginButton>
    </StyledLink>
  );
}