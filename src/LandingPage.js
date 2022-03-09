import { React, useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import { GlobalStyles } from "./Styles/Global";
import Navbar from "./components/univeralComponents/Navbar";
import MainScreen from "./components/landingPage/MainScreen";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const { showPanelNav, setShowPanelNav, isLoggedIn } = useContext(Context);
  const [__isMounted, setMounted] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn && __isMounted) {
        navigate("/panel");
      }
    return () => setMounted(false);
  }, []);

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
