import { React, useContext, useEffect } from "react";
import { Context } from "./Context";
import { GlobalStyles } from "./Styles/Global";
import Navbar from "./components/univeralComponents/Navbar";
import MainScreen from "./components/landingPage/MainScreen";

export default function LandingPage() {
  const { showPanelNav, setShowPanelNav } = useContext(Context);

  useEffect(() => {
    setShowPanelNav(false);
  }, [setShowPanelNav, showPanelNav]);
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MainScreen />
    </>
  );
}
