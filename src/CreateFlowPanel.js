import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalBackground } from './Styles/Global'
import Navbar from './components/univeralComponents/Navbar'
import { Context } from './Context';
import FlowsCreate from './components/webPanel/FlowsCreate';

export default function CreateFlowPanel() {
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
      <FlowsCreate />
    </>
  )
}
