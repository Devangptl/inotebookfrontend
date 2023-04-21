import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes'
import toast from 'react-hot-toast';
import Banner from './Banner';



export const Services =(props) => {
   

    const context = useContext(noteContext)
    const {addNote} = context

    const [note , setNote] = useState({title:"",description:"" , tag:""})

    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"" , tag:""})
        toast("Adding Successfully")
    }

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    
  return (
    <div className='bg-[#f0eeee]'>
    
        <Banner/>
    <div className='grid grid-cols-1 sm:grid-cols-1 mt-[100px] md:mt-[0px]  w-full p-[50px] md:px-[300px] '>
        

        <div className=' flex flex-col  justify-center ' >
            <form className='  w-full p-2 md:mt-[50px]  rounded-lg' action="POST">
                <h2 className='text-4x text-black text-3xl font-bold text-center'>Add Notes</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Title' name='title' value={note.title} onChange={onChange} minLength={5} required  className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <textarea  placeholder='Description' value={note.description} onChange={onChange} minLength={5} required  name='description' className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' rows="4"  type="textarea" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input placeholder='Tag' name='tag' value={note.tag} onChange={onChange} className='rounded-lg w-28 bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='text-center'>
                    <button disabled={note.title.length<5 || note.description.length<5} className=' w-[150px]  my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleClick}>Add Note</button>
                </div>

            </form>

        </div>
    </div>
    
    <div className='container pb-4 '>

    <Notes />
   
    </div>

    </div>
  )
}

export default Services
