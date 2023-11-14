import React , {useState , useContext} from 'react'
import '../css/AddNote.css'
import NoteContext from '../context/notes/noteContext'

function AddNote() {
    const [credentials, setCredentials] = useState({ title: "", description: "" , tag : "" })
    const {createNote } = useContext(NoteContext)

    const formSubmit = (e)=>{
        console.log("we have reached here")

        e.preventDefault();
        createNote(credentials.title , credentials.description , credentials.tag)
        setCredentials({...credentials , title : "" , description : "" , tag : ""})
    }

    const change = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <div className='AddNote'>
            <h3> Read create update and delete your notes using <span>V-Notes</span></h3>
            <form className='form' onSubmit={formSubmit}>
                <input type="title" name="title" id="title" placeholder='Enter the title' onChange={change} value={credentials.title}/>
                
                <textarea name="description" id="description" cols="30" rows="6" placeholder='Enter the description' onChange={change} value={credentials.description}></textarea>
                <input type="text" name="tag" id="tag" placeholder='Enter the tag' onChange={change} value={credentials.tag} />
                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default AddNote
