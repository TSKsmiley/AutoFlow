import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalBackground } from '../Styles/Global'
import Navbar from '../components/univeralComponents/Navbar'
import { Context } from '../Context';
import FlowsCreate from '../components/webPanel/FlowsCreate';
import {Helmet} from "react-helmet";
import { BlueBackground } from '../Styles/Styled';

export default function CreateFlowPanel() {
    const { isLoggedIn } = useContext(Context);
    const [__isMounted, setMounted] = useState(true);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      if(!isLoggedIn && __isMounted) {
          navigate("/");
      }
      
      return () => setMounted(false);
    }, []);

  return (
    <>
      <Helmet>
        <title>Autoflow | Create</title>
      </Helmet>
      <GlobalBackground />
      <Navbar />
      <BlueBackground>
        <FlowsCreate />
      </BlueBackground>
    </>
  )
}
