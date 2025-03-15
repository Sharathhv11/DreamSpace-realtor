import './App.css'
import Navbar from "./Componenets/Navbar/Navbar"
import Menu from './Componenets/Navbar/Menu'
import { useState } from 'react'

function App() {

  const [visiblity,setVisibility] = useState("hidden");

    const makeVisible = function(){
        if( visiblity ===  "hidden" )
            setVisibility("flex");
        else
            setVisibility("hidden");
    }

  return <>
  <Navbar setVisibility={makeVisible}/>
  <Menu visiblity={visiblity}  setVisibility={makeVisible}/>
  </>
}

export default App
