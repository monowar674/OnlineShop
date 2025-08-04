import React, { useState } from 'react'
import Nav from './Nav'
import Home from './home/Home'
import About from './About/About'
import { Link, Route, Routes } from 'react-router'
import Ghee from './Ghee/Ghee'
import Honey from './Honey/Honey'
import Contact from './Contact/Contact'
import Footer from './Footer'

const Header = () => {
  const [openMenue, setopenMenue] = useState(true)
  const isOpen = () => {
    if (openMenue == true) {
      setopenMenue(false)
    } else (setopenMenue(true))
  }
  return (
    <>
      <div className="bg-amber-300 w-full fixed z-10">
        <Nav />
      </div>
      <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7'>
        <div className=" ">
          <ul className='px-2 w-35  md:w-45 xl:w-50 h-full gap-5 cursor-pointer bg-[#ffd230] text-[#333] fixed left-0 top-17'>
            <li className='bg-amber-50 mb-3 mt-14 text-[16px] md:text-lg lg:text-xl xl:text-2xl px-2 py-1 rounded-[6px]'><Link to='/'>Home</Link></li>
            <li className='bg-amber-50 mb-3 text-[16px] md:text-lg lg:text-xl xl:text-2xl px-2 py-1 rounded-[6px]'><Link to='About'>About</Link></li>
            <li onClick={isOpen} className='relative bg-amber-50 mb-3 text-[16px] md:text-lg lg:text-xl xl:text-2xl px-2 py-1 rounded-[6px]'><Link>product</Link>
              {openMenue ? '' : <div className=" bg-amber-50 relative left-0 w-full shadow-md top-0">
                <li className='px-2 py-1.5 text-md my-2'><Link to='খাঁটি ঘি'>খাঁটি ঘি</Link></li>
                <li className='px-2 py-1.5 text-md my-2'><Link to='খাঁটি মধু'>খাঁটি মধু</Link></li>
              </div>}
            </li>
            <li className='bg-amber-50 mb-3 text-[16px] md:text-lg lg:text-xl xl:text-2xl px-2 py-1 rounded-[6px]'><Link to='Contact US'>Contact US</Link></li>
          </ul>
        </div>
        <div className="w-full  col-span-2 md:col-span-3 xl:col-span-6 pl-6 pr-2 mt-20">
          {/* <Home/> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='খাঁটি ঘি' element={<Ghee />} />
            <Route path='খাঁটি মধু' element={<Honey />} />
            <Route path='Contact US' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Header