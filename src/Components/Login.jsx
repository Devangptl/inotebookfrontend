import React, { useState } from 'react'
import { Link , useNavigate  } from 'react-router-dom'
import toast from 'react-hot-toast';

export default function Login(props) {

    const [credentials,setCredentials] = useState({email : "" , password : ""});
    let navigate = useNavigate();

    const host = "https://inotebookbackend-production.up.railway.app"


    const handalSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
            method:"POST",
            headers :{
              'Content-Type' : 'application/json'
            } ,
          body : JSON.stringify({email : credentials.email , password : credentials.password} )
          })
          const json = await response.json()
          console.log(json)

          if(json.success){
            localStorage.setItem('token' , json.authtoken);
            navigate("/")
            localStorage.setItem('email', credentials.email)
            toast(`Login with ${credentials.email}`)
          
          }
          else{
           toast('Email or Password Invalid')
          }
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <>
   
    <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full md:mb-[0px] mb-[-22px] '>
        <div className='bg-gray-800 flex flex-col px-4 justify-center ' >
            <form onSubmit={handalSubmit}  className='max-w-[400px]  px-8 mx-auto bg-gray-900 p-8 md:mt-[50px]  rounded-lg' action="">

                <h2 className='text-4x text-white text-3xl font-bold text-center'>LOG IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Email' name='email' value={credentials.email} required  onChange={onChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Password' name='password' value={credentials.password} required onChange={onChange} className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" />
                </div>
                {/* <div className='flex text-gray-400 py-2'>
                    <p className='flex items-center text-[12px] md:text-[15px]'><input className='mr-2' type="checkbox" /> Remember</p>
                    <Link className=' text-[12px] md:text-[15px] pl-3' to="/">Forget Password</Link>
                </div> */}
                <button  className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Log In</button>
              
                <p className=' text-white font-semibold text-center'>Create a account ? <span className='text-blue-600'><Link to="/singUp">Sing Up</Link></span></p>
            </form>
        </div>
    </div>
    </>
  )
}
