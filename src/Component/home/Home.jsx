import React from 'react'
import ghee from "../../../public/photos/banner/ghee.png"
import honey from "../../../public/photos/banner/honey.png"
import Card from '../Card/Card'
import gheeVideo from '../../assets/video/531747_Slow_motion_Slow_Motion_1920x1080.mp4'

import image1 from '../../../public/photos/images/image1.jpg'

const Home = () => {
    return (
        <div className=''>
            <>
                {/* Hello world */}
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active xl:w-full xl:h-100 bg-amber-300 rounded-2xl">
                            <img src={honey} className="d-block xl:w-full xl:h-full rounded-2xl" alt="..." />
                        </div>
                        <div className="carousel-item xl:w-full xl:h-100 bg-amber-300 rounded-2xl">
                            <img src={ghee} className="d-block w-100 xl:w-full xl:h-full rounded-2xl" alt="..." />
                        </div>
                        <div className="carousel-item xl:w-full xl:h-100 bg-amber-300 rounded-2xl">
                            <img src={honey} className="d-block w-100 xl:w-full xl:h-full rounded-2xl" alt="..." />

                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next text-amber-200"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="productCard mt-10">
                    <h1 className='text-center'>আমাদের পণ্য</h1>
                    <Card />
                </div>


                <div className="mt-20">
                    <h1 className='text-center mb-5'>কেনো আমাদের থেকে পণ্য নিবেন</h1>
                    <div className="grid mb-20 gap-10 grid-cols-2 items-center justify-center lg:ml-40">
                        <div className="col-span-2  md:col-span-1 lg:w-[500px] ">
                            <li>ক্যাশ অন ডেলিভারি সুবিধা</li>
                            <li>১০০% খাঁটি ও প্রাকৃতিক উপাদান</li>
                            <li> সরাসরি খামার থেকে সংগ্রহ</li>
                        </div>
                        <div className="col-span-2 md:col-span-1 ">
                            <li>গুণগত মানে আপোষ নয়</li>
                            <li>বিশ্বাস ও স্বচ্ছতা</li>
                            <li>দ্রুত ডেলিভারি ও ফ্রেন্ডলি সার্ভিস</li>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className='text-center mb-3'>আমাদের ফটো সমূহ</h1>
                    <div className="grid grid-cols-3 gap-1 mb-10 md:mb-20">
                        <div className="col-span-2 row-span-2 overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                        <div className="overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                        <div className=" overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                        <div className=" overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                        <div className=" overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                        <div className=" overflow-hidden ">
                            <img className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' src={image1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="my-20  relative ">
                    {/* <video  className='w-full  rounded-2xl' autoPlay controls  src={gheeVideo}></video> */}
                    <video class="h-full w-full rounded-lg" autoPlay controls>
                        <source
                            src={gheeVideo}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </>

        </div>
    )
}

export default Home