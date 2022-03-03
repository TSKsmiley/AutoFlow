import React from 'react'
import Navbar from './components/univeralComponents/Navbar'
import { GlobalBackground } from './Styles/Global'

export default function MainPanel() {
  return (
    <>
      <GlobalBackground />
        <Navbar />
        <h1>Main panel</h1>
    </>
  )
}
