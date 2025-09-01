import { useState } from 'react'
import logo from "./assets/6744.jpg"
import './App.css'
import Topnav from "./topnav.jsx"
import Degreenav from "./degreenav.jsx"
import Locationnav from './locationnav.jsx'

function App() {
  return (
    <>
    <Topnav />
    <Degreenav />
    <Locationnav />
    </>
  )
}

export default App
