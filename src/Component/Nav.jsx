import React, { useState } from 'react'
import logo from "../../public/photos/logo.png"
import search from "../../public/photos/search.png"

const Nav = () => {
    
  return (
    <div className=' mx-auto items-center flex justify-between px-4 md:px-10 lg:px-20' >
        <div className="logo py-1 px-1.5 ">
            <img className=' w-30' src={logo} alt="" />
        </div>
        <div className="searchBar">
            <div className="flex gap-3 bg-[#333] text-white py-1.5 px-5 rounded-4xl">
                <input className='w-0 xl:w-44 outline-0 border-0 ' type="text" placeholder='Search Hear' />
                <img className='w-7' src={search} alt="" />
            </div>
        </div>
        {/* <ul className='px-3 w-50 h-full gap-5 cursor-pointer bg-[#ffd230] text-[#333] fixed left-0 top-17'>
            <li className='bg-amber-50 mb-1 text-2xl px-4 py-1 rounded-[6px]'>home</li>
            <li className='bg-amber-50 mb-1 text-2xl px-4 py-1 rounded-[6px]'>About</li>
            <li onClick={isOpen} className='relative bg-amber-50 mb-1 text-2xl px-4 py-1 rounded-[6px]'>product
                {openMenue? '' : <div className="absolute bg-amber-50 p-4 left-50 w-35 shadow-md top-0">
                    <li className='px-3 py-1.5 bg-amber-300 my-2'>খাঁটি ঘি</li>
                    <li className='px-3 py-1.5 bg-amber-300 my-2'>খাঁটি মধু</li>
                </div>}
            </li>
            <li className='bg-amber-50 mb-1 text-2xl px-4 py-1 rounded-[6px]'>Contact US</li>
        </ul> */}
        
    </div>
  )
}

export default Nav