import React, { useContext } from 'react'
import '../css/NotesItem.css'
import NoteContext from '../context/notes/noteContext'

function NotesItem(props) {
    const{deleteNote} = useContext(NoteContext)
    const note = props.note
  return (
    <div className='notesItem'>
        <div className="fonts">
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-solid fa-trash" onClick={ ()=>{deleteNote(note._id)}}></i>
        </div>
        <hr />

      <h2 className='title'>{note.title}</h2>
      <p className='description'>{note.description}</p>
    </div>
  )
}

export default NotesItem
