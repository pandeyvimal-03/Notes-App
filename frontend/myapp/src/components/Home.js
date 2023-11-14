import React, { useEffect, useState } from 'react'
import Notify from '../utils/Notify'
import { useLocation } from 'react-router-dom';
import Notes from './Notes';
import AddNote from './AddNote';




function Home() {
    let location = useLocation();
    let properties = location.state;

    const [message, setMessage] = useState("")

    useEffect(() => {
        
        if (properties) {
            console.log("hii")
            setMessage(properties.message)
            setTimeout(() => {
                setMessage("")
            }, 5000)

        }


    }, [properties])




    return (
        <div>
            <AddNote />

            {/* <NotesItem title={"Hello how are you"} description={"we are indians and we can do anything we want , so never ever mess with us we are indians"} /> */}
            {/* <Notes/> */}
            <Notes/>


            {message && <Notify message={message} color={properties.color} backgroundColor={properties.backgroundColor} />}
        </div>
    )
}

export default Home
