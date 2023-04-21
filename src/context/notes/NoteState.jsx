import NoteContext from "./noteContext";
import React, { useState } from "react";
import toast from 'react-hot-toast';

export default function NoteState(props) {

    const host = "https://inotebookbackend-production.up.railway.app"
    const noteInitial = []

      const [notes , setNotes] = useState(noteInitial)

      //get note
      const getNotes = async () =>{

        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
          method:"GET",
          headers :{
            'Content-Type' : 'application/json',
            "auth-tokan" : localStorage.getItem('token')
          } ,
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }


      //add note
      const addNote = async (title,description,tag) =>{

        const response = await fetch(`${host}/api/notes/addnote`,{
          method:"POST",
          headers :{
            'Content-Type' : 'application/json',
            'auth-tokan' : localStorage.getItem('token')
          } ,
          body : JSON.stringify({title , description , tag})
        })
     const note = await response.json()
   
        setNotes(notes.concat(note))
      }

      //delete note
      const deleteNote = async(id) =>{
        toast("Delete Successfully")

        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method:"DELETE",
          headers :{
            'Content-Type' : 'application/json',
            'auth-tokan' : localStorage.getItem('token')
          } ,
        })

        const json =  response.json()
        console.log(json)

        const newNotes = notes.filter((note)=>{return note._id!==id})

        setNotes(newNotes)

      }
      //edit note
      const editNote = async(id , title ,description , tag) =>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method:"PUT",
          headers :{
            'Content-Type' : 'application/json',
            'auth-tokan' : localStorage.getItem('token')
          } ,
          body : JSON.stringify({title,description,tag})
        })
        const json = await response.json()
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];

          if(element._id ===id){
            newNotes[index].title = title
            newNotes[index].description = description
            newNotes[index].tag = tag
            break
          }
        }
        setNotes(newNotes)
      }


    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote ,getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
