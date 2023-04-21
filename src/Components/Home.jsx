import React from 'react'
import Typed from 'react-typed'
import imagI from '../assets/8machine-_-Jw7p2A369As-unsplash.jpg'
import { Link } from 'react-router-dom';
import Contact from './Contact';

export default function Home() {
  return (
    <>
    <div className='bg-[#f0eeee]'>

   
      <div className=" bg-gray-800 w-full py-[170px]">
        <div className="mx-auto text-center md:my-[10px] mb-[-100px] font-bold">
          <div className="text-xl md:text-3xl text-[turquoise]">
            A Better Life
          </div>
          <h2 className="text-white text-3xl p-3 md:text-[40px]">
           A Better World
          </h2>
          <div className="p-3 text-xl md:text-[30px]  text-[orange]">
            
            <Typed
              className=" md:ml-3 ml-2  text-[#c75b5f] "
              strings={[ "Go to Services","ADD Note", "UPDATE Note", "READ Note" , "DELETE Note" ]}
              typeSpeed={130}
              backSpeed={50}
              loop
            ></Typed>
          </div>
        </div>
      </div>

                 {/* section 2 */}

      <div className=" mx-8  my-10  md:grid grid-cols-3">
        <div className=" col-span-1 text-center">
          <img className='h-[300px] md:h-[400px] inline rounded-lg shadow-2xl' src={imagI} alt="" />
        </div>
        <div className="  col-span-2 p-10 flex flex-col justify-center">
          <h1 className='text-gray-800 font-bold my-2'>LEAR FROM EXPERT</h1>
          <p className='my-2  text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sit eos ipsum perferendis rem maxime facere magni numquam corporis
            commodi pariatur, voluptatum eaque maiores eveniet dolore fuga ea
            consequatur ut?
          </p>
          <br />
          <button className='w-[50%]  md:w-[30%]  bg-black text-white p-2 rounded'>Get Started</button>
        </div>
      </div>

                {/* section 3 */}

      <div className=' bg-gray-800 p-4 justify-around '>
        <div className='md:flex justify-between py-[50px] md:mx-[200px]'>
          <div className=' '>
            <h1 className='text-3xl p-4 md:text-[40px] font-bold text-white'>You want to login ?</h1>
            <span className='text-white p-4'>
              Sing up and upload the file and save
            </span>
          </div>
          <div className=' p-4 md:pt-10'>
          <button className=' bg-white text-black p-2 px-5 font-bold rounded'><Link to="/login">Log in</Link></button>
          </div>

        </div>

      </div>



      {/* contact */}

      <div className=''>
        <Contact/>
      </div>
      </div>
    </>
  );
}
