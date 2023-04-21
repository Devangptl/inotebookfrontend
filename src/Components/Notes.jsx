import React from "react";
import noteContext from '../context/notes/noteContext'
import { useContext, useRef, useEffect , useState } from "react";
import NoteItem from "./NoteItem";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Notes = () => {

  const context = useContext(noteContext);
  const navigate  = useNavigate();
  
  const { notes, getNotes, editNote} = context;
  useEffect(() => {
    if(localStorage.getItem('token')){

      getNotes()
    }
    else{
      navigate('/login')
    }
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);
  const [note , setNote] = useState({ id: "", etitle:"",edescription:"" , etag:""})

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id :currentNote._id , etitle:currentNote.title , edescription:currentNote.description , etag : currentNote.tag})
  }



  const handleClick=()=>{
    console.log("updating " , note)
    editNote(note.id , note.etitle ,note.edescription , note.etag)
    refclose.current.click()
    toast("Updating Successfully")
  }

  const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value})
  }



  return (
    <>

      <button ref={ref} type="button" className="btn hidden" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Update Notes</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              {/* form */}

              <form className='  w-full p-2     rounded-lg' action="POST">
                <div className='flex flex-col text-gray-400 py-2'>
                  <input placeholder='Title' value={note.etitle} name='etitle' minLength={5} required  onChange={onChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                  <textarea placeholder='Description' value={note.edescription} minLength={5} required  onChange={onChange}  name='edescription' className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' rows="4" type="textarea" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                  <input placeholder='Tag' value={note.etag} name='etag' onChange={onChange}  className='rounded-lg w-28 bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="bg-red-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white rounded-md px-4 py-1" data-dismiss="modal">Close</button>
              <button type="button"  disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} className="bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white rounded-md px-4 py-1">Update Note</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container  border-t-2 border-[black]   mt-[-30px]">

        <h1 className="text-3xl text-center mt-[60px]  text-black font-semibold ">Look at your Notes</h1>
        
          <div className="  font-bold text-[25px] p-[20px] text-center underline">
            {notes.length === 0 && "No note Display 😟"}
          </div>
        <div className="md:grid grid-cols-3 text-center ">
          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
          })}
        </div>
        
      </div>
    
    </>
  );
};

export default Notes;
