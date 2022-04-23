import { React, useContext, useEffect } from "react";
import { Context } from "../Context";
import {Helmet} from "react-helmet";

import LoginPanel from "../components/loginPage/LoginPanel";
import { LoginBackground } from "../Styles/Global";

export default function Login() {
  const { showPanelNav, setShowPanelNav } = useContext(Context);

  useEffect(() => {
    setShowPanelNav(false);
  }, [setShowPanelNav, showPanelNav]);
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
