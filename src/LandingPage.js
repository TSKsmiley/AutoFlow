import React from 'react'
import { GlobalStyles } from './Styles/Global'
import Navbar from './components/univeralComponents/Navbar'
import MainScreen from './components/landingPage/MainScreen'

export default function LandingPage() {
  return (
    <>
        <GlobalStyles />
        <Navbar />
        <MainScreen/>
    </>
  )
}
