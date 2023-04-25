import React, { useState   } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import loginIcon from '../assets/login.png';



export default function Navbar(props) {
    const [toggle , setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

   

    const onChange = () => { 
        setToggle(false)
    }
    
    const navigate  = useNavigate();
    
  
    const handleLogout = (e) =>{
            e.preventDefault();
            localStorage.removeItem('token')
            toast("Successfully Logout")
            navigate('/login')
            setToggle(false)
    }




    return (
        <>
        <div className=' shadow-2xl w-full fixed top-0 left-0'>
            <div className=' flex item-center justify-around bg-white py-2 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center px-10 font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-gray-600 ml-[-40px]  '>
                        Note.
                    </span>
                </div>

                <ul className= {`md:flex md:items-center md:ml-[0px]  font-bold md:pb-0 ml-[-90px]  md:static md:z-auto z-[-1]  md:w-auto duration-500 ease-in gap-8  uppercase text-gray-800 text-xs block  `}>

                    <li className='transition duration-300 ease-in-out hover:scale-125' ><Link className='hover:text-red-400 hover:no-underline' to='/'>Home</Link></li>
                    <li className='transition duration-300 ease-in-out hover:scale-125'><Link className='hover:text-red-400  hover:no-underline' to='/services'>Services</Link></li>
                    <li className='transition duration-300 ease-in-out hover:scale-125'><Link className='hover:text-red-400  hover:no-underline' to='/about'>About</Link></li>
                    {/* <li className=' hover:text-gray-400 duration-500 '><Link to='/singUp'>Sing Up</Link></li> */}
                    <li className='transition duration-300 ease-in-out hover:scale-125 '><Link className='hover:text-red-400 hover:no-underline ' to='/contact'>Contact</Link></li>
                    {!localStorage.getItem('token')?<li className='    bg-gray-800 text-[white] p-1 px-3   focus:bg-[white] shadow-none  transition duration-500  ease-in-out uppercase hover:scale-125 rounded-lg '><Link className='hover:text-white hover:no-underline ' to='/login'> <span className=''>Login</span> </Link></li> : <button className='bg-gray-800 focus:bg-[white]  uppercase text-[white] p-1 px-3 shadow-none rounded-lg transition duration-300 ease-in-out hover:scale-125'  onClick={handleLogout } >Logout</button> }

                    <div className='md:flex md:items-center  '>
                    {!localStorage.getItem('token')? null:<><Link to='/profile'><img className='md:h-[30px] transition duration-300 ease-in-out hover:scale-150 h-[0px] ' src={loginIcon} alt="" /> </Link><span className='px-2 ' > {localStorage.getItem('name')}  </span></>}
                </div>
                </ul>

                
            <div className='md:hidden ml-[64px]' onClick={handleClick} >

                {
                    toggle ? 
                    <AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-black mr-[-80px] text-2xl md:hidden  mt-[32px] block'/>
                    :
                    <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-black  mr-[-80px] text-2xl md:hidden  mt-[32px] block'/>

                }
            </div>
                
<div>
             

                <ul className={` duration-500 bg md:hidden text-white text-center bg-gray-800 mt-[88px] font-[Poppins] text-lg w-full h-full fixed ${toggle ? 'left-0' :'left-[-100%]' }`}>
                <div className=' justify-center mt-4 flex'>
                    {!localStorage.getItem('token')? null:<><Link to='/profile' onClick={onChange}><img className='h-[30px] ' src={loginIcon} alt="" /></Link><span className='flex text-center text-[#ffc130]' >{localStorage.getItem('email')}</span></>}
                </div>
                    <li className=' hover:text-gray-400 md:my-0 my-7 ' onClick={onChange}><Link to='/'>Home</Link></li>
                    <li className=' hover:text-gray-400 md:my-0 my-7 ' onClick={onChange}><Link to='/services'>Services</Link></li>
                    <li className=' hover:text-gray-400 md:my-0 my-7 ' onClick={onChange}><Link to='/about'>About</Link></li>
                    {/* <li className=' hover:text-gray-400 md:my-0 my-7 '><Link to='/singUp'>Sing Up</Link></li> */}
                    <li className=' hover:text-gray-400 md:my-0 my-7 ' onClick={onChange}><Link to='/contact'>Contact</Link></li>
                    {!localStorage.getItem('token')?<li className=' hover:text-gray-400 md:my-0 my-7  ' onClick={onChange}><Link to='/login'>Login</Link></li> : <Link onClick={handleLogout}>Logout</Link>}
                </ul>
                </div>
            </div>
        </div>

       

        </>
    )
}
