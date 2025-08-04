import React from 'react'
import logo from '../../public/photos/logo.png'
const Footer = () => {
  return (
    <div className="w-full p-2 lg:p-8 bg-[#535252] grid grid-cols-3">
        <div className="">
            <img className='w-30 mb-2' src={logo} alt="" />
            <span className='text-white pt-20'>খাঁটি, প্রাকৃতিক ও কেমিক্যালমুক্ত পণ্য সরাসরি বিশ্বস্ত খামার থেকে – প্রতিটি ফোঁটায় নিশ্চিন্ত গুণগত মান ও স্বাস্থ্য।</span>
            <div className="grid grid-cols-2">
                <div className="">1</div>
                <div className="">2</div>
                <div className="">3</div>
                <div className="">4</div>
            </div>
        </div>
        <div className=""></div>
        <div className=""></div>
    </div>
  )
}

export default Footer