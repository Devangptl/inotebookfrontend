import React from 'react'
import BannerImg from '../assets/addNoteImg-removebg.png'

const Banner = () => {
  return (
    <>
    <div className=' container md:flex md:justify-between md:mb-[0px] mb-[-100px] grid md:grid-cols-2 text-justify'>
        <div className='mt-[130px] md:ml-[60px] pt-[60px] '>
            <span className='font-bold text-[#f13958] md:text-[50px] text-[40px]'>i</span><span className='font-bold md:text-[50px] text-[40px] text-gray-700  '>NoteBook</span>
            <br />
            <span className='font-semibold text-[23px] text-center'>Your note on cloud - safe and secure</span>
            <br />
            <span className='  justify-content-xxl-end'>An online web platform where you can create,edit,upload,delete your notesinformation privately and securely without any disturbancee.</span>
        </div>
        <div className='hidden md:block mt-[70px] object-right'>
         <img className=' h-[400px]   w-[1000px]' src={BannerImg} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Banner
