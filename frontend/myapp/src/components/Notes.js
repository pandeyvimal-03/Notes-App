import React , {useEffect , useContext} from 'react'
import '../css/Notes.css'
import NoteContext from '../context/notes/noteContext'
import NotesItem from './NotesItem'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';




function Notes() {
    const navigate = useNavigate()
    const {notes , getNotes , setNotes} = useContext(NoteContext)
    const { setLogedIn} = useContext(UserContext)
    useEffect(()=>{

        fetchNote();
       
    },[])

    const fetchNote = async ()=>{

        
       const response = await getNotes();
       if(!response.success){

        navigate('/login')
       }
       else{
        setLogedIn(true)
        setNotes(response.Newnotes)
       }
    }
    console.log(notes)
    return (
        <div className='notes'>
            {
              notes &&  notes.map((e)=>{
                    return (<NotesItem  key= {e._id} note = {e}/>)
                })
            }
        </div>
    )
}

export default Notes
