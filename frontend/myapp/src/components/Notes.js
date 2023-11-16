import React, { useEffect, useContext, useState } from 'react'
import '../css/Notes.css'
import NoteContext from '../context/notes/noteContext'
import NotesItem from './NotesItem'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import EditNote from './EditNote';




function Notes() {
    const navigate = useNavigate()
    const { notes, getNotes, setNotes } = useContext(NoteContext)
    const { setLogedIn } = useContext(UserContext)
    const [showEdit, setshowEdit] = useState(false)
    const [editNote, setEditNote] = useState(null);


    const handleEditNote = (note) => {
     
        setshowEdit(true);
        setEditNote(note)

    }

    useEffect(() => {

        fetchNote();

    }, [])

    const fetchNote = async () => {


        const response = await getNotes();
        if (!response.success) {

            navigate('/login')
        }
        else {
            setLogedIn(true)
            setNotes(response.Newnotes)
        }
    }

    
    return (
        <>
            {showEdit && <EditNote editNote={editNote} setshowEdit = {setshowEdit} />}

            <div className='notes'>
                {
                    notes && notes.map((e) => {
                        return (<NotesItem key={e._id} note={e} handleEditNote={handleEditNote} />)
                    })
                }
            </div>
        </>
    )
}

export default Notes
