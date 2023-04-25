import React,{useState} from 'react'
import Form from './Form'
import Information from './Information'
import Wetherimage from './assets/18973421_7ybd_w2m4_191012.jpg'


export default function ShowWether() {

    const [result , setResult] = useState({})
  return (
    <>
    <div className='flex mt-[100px] items-center gap-[40px] h-[100vh] ml-auto mr-auto w-[65%]'>
      <div className=' w-[27%] h-[80%] bg-cover'><img className='' src={Wetherimage}  alt="" /></div>
      <div className='w-[73%] h-[80%] '>
        <Form setResult={setResult}/>
        <Information result ={result} />
      </div>
    </div>
    </>
  )
}
