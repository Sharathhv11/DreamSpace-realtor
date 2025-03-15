import React from 'react'
import logo from "./../../assets/logo.png"
import { Menu } from 'lucide-react'

const Navbar = ({setVisibility}) => {
  return (
    <nav className='w-full h-[80px] bg-black flex justify-between items-center px-[20px] absolute ' >
      <figure className='min-w-1/4  h-full flex justify-center items-center '>
        <img src={logo} alt="DreamSpace Realtors" className='w-[200px] h-full object-cover relative top-[-10px] left-[-20px]' />
      </figure>

      {/* destop view */}
      <div className=' justify-end items-center w-full h-full  gap-x-8 m-9 hidden md:flex'>
        <div className='w-[130px] h-[44px] border-2 border-white flex justify-center items-center rounded-[8px]'>
          <a href="#" className='poppins-regular font-semibold  text-white capitalize'>About Us</a>
        </div>
        <div className='w-[130px] h-[44px] border-2 border-white flex justify-center items-center rounded-[8px]'>
          <a href="#" className='poppins-regular font-semibold  text-white capitalize'>Our Services</a>
        </div>
        <div className='w-[130px] h-[44px] bg-[#00FF3C] flex justify-center items-center rounded-[8px] hover:bg-[#00ff3ce6]'>
          <a href="#" className='poppins-regular font-semibold  text-black capitalize'>contact us</a>
        </div>
      </div>

      {/* mobile view */}

      <div className='flex md:hidden '>
          <button onClick={setVisibility}>
            <Menu color='white'/>
          </button>
      </div>
    </nav>
  )
}

export default Navbar;
