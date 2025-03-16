import React from 'react'
import logo from "./../../assets/logo.png"
import { Menu,SunMoon } from 'lucide-react'

const Navbar = ({ setVisibility, mode,changeMode }) => {
  return (
    <nav className={`w-full h-[80px] flex justify-between items-center px-[20px] absolute transition-all duration-300 ${mode === 'light' ? 'bg-white' : 'bg-black'}`}>
      <figure className='min-w-1/4 h-full flex justify-center items-center'>
        <img 
          src={logo} 
          alt="DreamSpace Realtors" 
          className={`w-[200px] h-full object-cover relative top-[-10px] left-[-20px] transition-all duration-300 ${mode === 'light' ? 'invert' : ''}`} 
        />
      </figure>

      {/* Desktop view */}
      <div className='justify-end items-center w-full h-full gap-x-8 m-9 hidden md:flex'>
        <div className={`w-[130px] h-[44px] border-2 flex justify-center items-center rounded-[8px] transition-all duration-300 ${mode === 'light' ? 'border-black' : 'border-white'}`}>
          <a href="#" className={`poppins-regular font-semibold capitalize transition-all duration-300 ${mode === 'light' ? 'text-black' : 'text-white'}`}>About Us</a>
        </div>
        <div className={`w-[130px] h-[44px] border-2 flex justify-center items-center rounded-[8px] transition-all duration-300 ${mode === 'light' ? 'border-black' : 'border-white'}`}>
          <a href="#" className={`poppins-regular font-semibold capitalize transition-all duration-300 ${mode === 'light' ? 'text-black' : 'text-white'}`}>Our Services</a>
        </div>
        <div className='w-[130px] h-[44px] bg-[#00FF3C] flex justify-center items-center rounded-[8px] hover:bg-[#00ff3ce6]'>
          <a href="#" className='poppins-regular font-semibold text-black capitalize'>Contact Us</a>
        </div>
      </div>

        <button className={`hidden md:flex border-2 ${mode === 'light' ? 'border-black' : 'border-white'} w-[60px] h-[40px] rounded items-center justify-center`} onClick={changeMode}><SunMoon color={mode === 'light' ? 'black' : 'white'} /></button>
      {/* Mobile view */}
      <div className='flex md:hidden gap-x-3'>
      <button className={`flex md:hidden border-2 ${mode === 'light' ? 'border-black' : 'border-white'} w-[50px] h-[40px] rounded items-center justify-center`} onClick={changeMode}><SunMoon color={mode === 'light' ? 'black' : 'white'} /></button>
        <button onClick={setVisibility}>
          <Menu color={mode === 'light' ? 'black' : 'white'} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
