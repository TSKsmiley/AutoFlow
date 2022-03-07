import { React, useContext, useEffect} from 'react'
import Navbar from './components/univeralComponents/Navbar'
import { GlobalBackground } from './Styles/Global'
import { Context } from './Context'

export default function MainPanel() {
  const { showPanelNav, setShowPanelNav } = useContext(Context);

  useEffect(() => {
    setShowPanelNav(true);
  }, [showPanelNav])
  
  return (
    <>
      <GlobalBackground/>
        <Navbar/>
    </>
  )
}
