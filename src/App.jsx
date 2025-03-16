import './App.css'
import Navbar from "./Componenets/Navbar/Navbar"
import Menu from './Componenets/Navbar/Menu'
import { useState } from 'react'
import Home from "./../src/Componenets/Home/Home"
function App() {

  const [visiblity,setVisibility] = useState("hidden");
  
  const [mode,setMode] = useState("light")

  const changeMode = function(){
    if( mode === "light" )
        setMode("dark");
    else
        setMode("light");
  }

    const makeVisible = function(){
        if( visiblity ===  "hidden" )
            setVisibility("flex");
        else
            setVisibility("hidden");
    }

  return <>
  <Home mode={mode} changeMode={changeMode}/>
  <Navbar setVisibility={makeVisible} mode={mode} changeMode={changeMode}/>
  <Menu visiblity={visiblity}  setVisibility={makeVisible} mode={mode} changeMode={changeMode}/>
  </>
}

export default App
