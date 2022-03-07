import { React, useContext, useEffect} from 'react'
import { Context } from './Context'

import LoginPanel from './components/loginPage/LoginPanel'
import { LoginBackground } from './Styles/Global'


export default function Login() {
  const { showPanelNav, setShowPanelNav } = useContext(Context);

  useEffect(() => {
    setShowPanelNav(false);
  }, [showPanelNav])
  return (
    <>
      <LoginBackground/>
        <LoginPanel/>
    </>
  )
}
