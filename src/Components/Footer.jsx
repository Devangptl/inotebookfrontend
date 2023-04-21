import React from 'react'
import {AiFillInstagram ,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='  w-full md:h-[70px] h-[85px] bg-gray-800  md:justify-around md:flex text-center'>
      
       <div className='md:mt-[22px]'>
      <span className="text-sm text-[#e8e1e1] dark:text-gray-300 sm:text-center">© 2023 Note. All Rights Reserved.
        </span>
      </div>
      <div className='flex md:mt-[22px] mt-4 gap-3  justify-center text-[white] md:text-3xl text-2xl'>
      <Link className=' ' to="https://www.instagram.com/devang_.03/"><AiFillInstagram/></Link>
      <Link to="https://www.facebook.com/devangkumar.patel.33"><AiFillFacebook/></Link>
      <Link to="https://www.linkedin.com/in/devang-patel-6b68a2247/"><AiFillLinkedin/></Link>
      </div>
      </div>
    
  )
}
