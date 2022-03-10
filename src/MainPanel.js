import { React, useContext, useEffect, useState } from "react";
import Navbar from "./components/univeralComponents/Navbar";
import { GlobalBackground } from "./Styles/Global";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";
import FlowsPanel from "./components/webPanel/FlowsPanel";

export default function MainPanel() {
  const { showPanelNav, setShowPanelNav, isLoggedIn } = useContext(Context);
  const [__isMounted, setMounted] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn && __isMounted) {
        navigate("/");
    }
    
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    setShowPanelNav(true);
  }, [setShowPanelNav, showPanelNav]);

  return (
    <>
      <GlobalBackground />
      <Navbar />
      <FlowsPanel />
    </>
  );
}
