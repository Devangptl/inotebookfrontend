import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1  w-full p-[50px] md:px-[300px] '>
        

        <div className=' flex flex-col  justify-center ' >
            <form className='  w-full p-2 md:mt-[50px]  rounded-lg' action="">
                <h2 className='text-4x text-black text-3xl font-bold text-center'>Contact Us</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <textarea  placeholder='Message' className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' rows="4"  type="textarea" />
                </div>
               <div className='text-center'>

                <button className='w-[100px] my-5 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SEND</button>
               </div>
                <p className=' text-black font-semibold text-center'>Create a account ? <span className='text-blue-600'><Link to="/singUp">Sing Up</Link></span></p>
            </form>
        </div>
    </div>
  )
}