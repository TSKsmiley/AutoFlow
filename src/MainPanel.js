import React from 'react'
import Navbar from './Navbar'
import { GlobalBackground } from './Styles/Global'

export default function MainPanel() {
  return (
    <>
      <GlobalBackground>
        <Navbar />
        <h1>Din mor og din far</h1>
      </GlobalBackground>
    </>
  )
}
