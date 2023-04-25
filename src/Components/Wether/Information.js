import React from 'react'
import { MdLocationOn ,MdOpacity ,MdBrightness5 ,MdBrightness6 ,MdDehaze ,MdWbCloudy } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";



export default function Information({result}) {

  return (
    <div className=' bg-[#ffaeae] flex  rounded-b-lg md:ml-[60px] ml-0 text-sm' >
    
    {result && Object.keys(result).length > 0?
    
    
    <div className='m-[50px]' >
    <span className='flex gap-2'><MdLocationOn className='text-[20px]'  /> Location : {result.name} , {result.sys.country}</span>
        <span className='flex gap-2 py-2'><CiTempHigh className='text-[20px]' /> Temperature : {result.main.temp} </span>
        <span className='flex gap-2 py-2'><MdOpacity className='text-[20px]' /> Humidity : {result.main.humidity} </span>
        <span className='flex gap-2 py-2'><MdBrightness5 className='text-[20px]' /> Sun Rise : {new Date(result.sys.sunrise *1000).toLocaleTimeString() } </span>
        <span className='flex gap-2 py-2'><MdBrightness6 className='text-[20px]' /> Sun Set : {new Date(result.sys.sunset * 1000).toLocaleTimeString()} </span>
        <span className='flex gap-2 py-2'><MdDehaze className='text-[20px]' /> Humidity : {result.weather[0].main} </span>
        <span className='flex gap-2 py-2'><MdWbCloudy className='text-[20px]' /> Clouds : {result.clouds.all}% </span>
    </div>
    
    : <p className='p-[160px] text-[red] ml-4 font-[bold] text-[15px]'>Please Enter the value check weather </p>}
    </div>
  )
}
