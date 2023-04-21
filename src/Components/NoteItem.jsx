import React ,{useContext} from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { Link } from "react-router-dom";
import noteContext from '../context/notes/noteContext'


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote  } = context;
    const { note ,updateNote } = props;

    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase()
      }

    return (
        <div>
            <div className=" my-3 mx-3">
                <div className=" border border-black bg-[#ffff75] shadow-2xl p-3  rounded-lg card-body">
                    <h5 className="card-title text-[20px] text-[#9c4141] border-b-1 border-t-1 border-[black] rounded-md py-1 font-semibold">{capitalize(note.title)}</h5>
                    <p className="card-text text-[12px] text-[#3751a7] mt-2 text-justify border-b-1 border-t-1 border-[black] rounded-md p-2 font-semibold">#{note.tag}</p>
                    <div className="text-ellipsis card-text text-[15px] mt-3 text-justify rounded-md p-3 text-[#5b1f1f] border-b-2 border-t-2 border-[black] font-semibold">

                    <p>{capitalize(note.description)} </p>
                    </div>
                        <div className='flex justify-center mt-3  p-2 text-center gap-5'>
                            <Link > <AiFillEdit className="text-[green]" onClick={()=>{updateNote(note)}}  /></Link>
                            <Link > <AiFillDelete className="text-[red]" onClick={()=>{deleteNote(note._id)}} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default NoteItem;
