import { React } from "react";
import {Helmet} from "react-helmet";

import LoginPanel from "../components/loginPage/LoginPanel";
import { LoginBackground } from "../Styles/Global";

export default function Login() {

  return (
    <>
      <Helmet>
        <title>Autoflow | Login</title>
      </Helmet>
      <LoginBackground />
      <LoginPanel />
    </>
  );
}
