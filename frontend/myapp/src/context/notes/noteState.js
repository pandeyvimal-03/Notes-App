import { useState } from "react";
import NoteContext from "./noteContext";


function NoteState(props) {
     const url = "http://localhost:4000/api/notes"
    const [notes, setNotes] = useState([])

    // fetching all notes
    const getNotes = async () => {

        const res = await fetch(`${url}`, {
            method : 'GET',
            headers: {
                'content-type': "application/json"
                },
            credentials : "include"
        })

        const response = await res.json()
        // if(response.success){

        //     setNotes(response.Newnotes)
        // }
        // else{
        //     return response
        // }
        return response;
        
    }

    // creating a notes 
    const createNote = async (title, description, tag) => {
        if(title.length >3 && description.length>3 )
        {
            const res = await fetch(`${url}/addNote`, {
                method : 'POST',
                headers: {
                    'content-type': 'application/json'
                    },
                credentials : "include",
                body: JSON.stringify({ title: title, description: description, tag: tag })
            })
    
            const response = await res.json()
            setNotes (notes.concat(response))
        }

    }

    // updating a note 
    const updateNote = async (id ,title , description , tag)=>{

        console.log('here what we have got ' , id , title)

         const res = await fetch (`${url}/updateNote/${id}` , {
             method : 'PUT',
           headers : { 
                 'content-type' : 'application/json'
             },
             credentials : "include",
             body : JSON.stringify({title : title , description : description , tag : tag})
         })

         const response = await res.json();
         if(response.success){
            let newNotes = JSON.parse(JSON.stringify(notes))
            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index];
                if (element._id === id) {
                  newNotes[index].title = title;
                  newNotes[index].description = description;
                  newNotes[index].tag = tag; 
                  break; 
                }
              }  
              setNotes(newNotes);
              return true;
         }
         console.log(response)

    }

    // deleting a note 
    const deleteNote = async (id)=>{
        console.log('we are in delete note ' , id)
        const res = await fetch(`${url}/deleteNote/${id}`, {
            method : 'DELETE', 
            headers : {
                'content-type' : 'application/json'
            },
            credentials : "include"

        })
        const response = await res.json()
         if(response){
            let newNote = notes.filter((e)=>{
                return e._id !== id

            })
            setNotes (newNote)
         }
    }

    return (
        <NoteContext.Provider value={{notes,setNotes , getNotes , createNote , updateNote , deleteNote}}>

            {props.children}

        </NoteContext.Provider>
    )
}

export default NoteState
