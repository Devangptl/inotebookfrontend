import React ,{useState} from 'react'
import { getWeather } from './Services/api'



export default function Form({setResult}) {

    const[data , setData] = useState({city : '' , country : ''})    

    const handleChange = (e) =>{
        setData({...data, [e.target.name] :e.target.value})
    }  

    const getWeatherInfo = async () =>{
      let response =   await getWeather(data.city , data.country)
      setResult(response)
    }


  return (
    <>
    
      <div className='bg-gray-700 py-3 pl-2 rounded-t-lg  flex gap-3 '>
        <div className='flex flex-col w-[150px]'>
        <input 
         placeholder='City'
         onChange={(e)=>handleChange(e)}
         name = 'city'
         className=' rounded-md pl-2 py-1 focus:border-blue-500 focus:bg-[#ffffff] text-gray-800 focus:outline-none'
         />
        </div>
        <div className=' '>
        <input 
        placeholder='Country'
        onChange={(e)=>handleChange(e)}
        name = 'country'
        className=' rounded-md pl-2 py-1 focus:border-blue-500focus:bg-[#ffffff] text-gray-800  focus:outline-none'
        />
        </div>
        <div className=''>
        <button 
        className='bg-[#43dd4d] py-1 ml-[60px] hover:bg-[white] rounded-md px-3'
        onClick={() =>getWeatherInfo()}
        >Get Wether</button>

        </div>
    </div>
</>
  )
}
