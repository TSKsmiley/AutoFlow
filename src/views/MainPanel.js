import { React, useContext, useEffect, useState } from "react";
import Navbar from "../components/univeralComponents/Navbar";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import FlowsPanel from "../components/webPanel/FlowsPanel";
import {Helmet} from "react-helmet";
import { BlueBackground } from "../Styles/Styled";
import { GlobalBackground } from "../Styles/Global";

export default function MainPanel() {
  const { isLoggedIn } = useContext(Context);
  const [__isMounted ] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn && __isMounted) {
        navigate("/");
    }
    
  }, []);

  return (
    <>
      <Helmet>
        <title>Autoflow | Panel</title>
      </Helmet>
      <GlobalBackground />
      <Navbar />
      <BlueBackground>
        <FlowsPanel />
      </BlueBackground>
    </>
  );
}
