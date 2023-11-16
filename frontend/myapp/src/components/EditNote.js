import React, { useEffect, useState ,useContext } from 'react'
import '../css/EditNote.css'
import NoteContext from '../context/notes/noteContext';

function EditNote(props) {

   const {updateNote} = useContext(NoteContext)
    const [credentials, setCredentials] = useState({ title: "", description: "", tag: "" })
    let editNote = props.editNote;

    useEffect(()=>{
        
         if (editNote){

              setCredentials({...credentials , title : editNote.title , description : editNote.description , tag : editNote.tag })
            
        }
        
    },[editNote])

    const change = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const formSubmit = (e) => {

        e.preventDefault();
        
         const res = updateNote(editNote._id , credentials.title , credentials.description , credentials.tag)
         if(res){
             props.setshowEdit(false)
         }
    }
   
    return (
        <div className='EditNote'>
            
            <form className='myForm' onSubmit={formSubmit}>
            <h2>Edit your - Note</h2>
                <input type="title" name="title" id="title" onChange={change} value={credentials.title} />

                <textarea name="description" id="description" cols="30" rows="6" onChange={change} value={credentials.description}></textarea>
                <input type="text" name="tag" id="tag" onChange={change} value={credentials.tag} />
                <button type='submit'>Edit Note</button>

            </form>

        </div>
    )
}

export default EditNote
