import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


export default function SingUp(props) {
    const [credentials,setCredentials] = useState({name: "" , email : "" , password : "" ,cpassword : ""});
    let navigate = useNavigate();

    const host = "https://inotebookbackend-production.up.railway.app" || "http://localhost:5000"


    const handalSubmit = async (e) =>{
        e.preventDefault();
        const {name , email ,password} = credentials;

        const response = await fetch(`${host}/api/auth/createuser`,{
            method:"POST",
            headers :{
              'Content-Type' : 'application/json'
            } ,
          body : JSON.stringify({name, email ,password} )
          })
          const json = await response.json()
          
            
            if (json.success){
  
                localStorage.setItem('token' , json.authtoken)
                navigate("/")
                toast('SingUp Successfully')
                localStorage.setItem('name', credentials.name)
            }
            else{
              toast("Already login" )
            }
          
          
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }



   

  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full md:mb-[0px] mb-[-22px]'>
       

        <div className='bg-gray-800 flex flex-col justify-center px-8 mt-12' >
            <form onSubmit={handalSubmit} className='max-w-[300px] px-8  w-full mx-auto bg-gray-900 p-8 rounded-lg' action="">
                <h2 className='text-4x text-white text-3xl font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Name' id='name' name='name' required onChange={onChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Email' id='email' name='email' required onChange={onChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Password' id='password' name='password' required minLength={5} onChange={onChange} className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2' >
                    <input placeholder='Confirm Password' id='cpassword' name='cpassword' required minLength={5} onChange={onChange} className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" />
                </div>
               
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sing Up</button>
                <p className=' text-white font-semibold text-center'>Already a member ? <span className='text-blue-600'><Link to="/login">Log In</Link></span></p>

            </form>
        </div>
    </div>
  )
}
