import React ,{useEffect, useState} from 'react'
import profileIcon from '../assets/icons8-male-user-94.png'

const Profile = () => {

    const [data , setData] = useState([])
    const host = "https://inotebookbackend-production.up.railway.app" || "http://localhost:5000"

   useEffect((i)=>{
     fetch(`${host}/api/auth/getuser`,{
        method:"POST",
        headers :{
          'auth-tokan' : localStorage.getItem('token')
        } 
   }).then((res)=> res.json())
   .then((user) =>{
    setData(user)
    
    // console.log(user)
   })
   
},[])


    return (
        <div  className=' h-screen mt-[260px] '>
            <div className="text-center">
                <img className='mx-auto d-block ' src={profileIcon}  alt="..." />
            </div>
            <div className=' px-[400px] pt-3 container mt-4'>
                <tbody className='' >
                    <tr className=''>
                        <th className='px-[80px]'>Name</th>
                        <th className='px-[80px]'>Email</th>
                    </tr>
                    <tr>
                        <td className='px-[80px]'>{data.name} </td>
                        <td className='px-[80px]'>{data.email} </td>
                    </tr>
                   
                </tbody>
            </div>
            </div>
    )
}

export default Profile
