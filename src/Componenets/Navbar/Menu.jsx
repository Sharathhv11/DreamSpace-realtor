import React from 'react'
import {X} from "lucide-react"

const Menu = ({visiblity,setVisibility}) => {
    


  return (
    <div className={` w-full h-[100vh]  z-10 ${visiblity} glass justify-center items-center fixed top-0 `} >
        <button onClick={setVisibility} className='absolute top-[-5px] right-[-13px] m-8'>
            <X color="white"/>
        </button>

        <div className=' flex border-2 h-full justify-center items-center flex-col w-full gap-3.5'>
        <div className='w-[130px] h-[44px] border-2 border-white flex justify-center items-center rounded-[8px]'>
          <a href="#" className='poppins-regular font-semibold  text-white capitalize'>About Us</a>
        </div>
        <div className='w-[130px] h-[44px] border-2 border-white flex justify-center items-center rounded-[8px]'>
          <a href="#" className='poppins-regular font-semibold  text-white capitalize'>Our Services</a>
        </div>
        <div className='w-[130px] h-[44px] bg-[#00FF3C] flex justify-center items-center rounded-[8px] hover:bg-[#00FF3C]'>
          <a href="#" className='poppins-regular font-semibold  text-black capitalize'>contact us</a>
        </div>
        </div>
    </div>
   
    

  )
}

export default Menu;
