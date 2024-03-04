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
            setMessage(properties.message)
            setTimeout(() => {
                setMessage("")
            }, 5000)

        }


    }, [properties])




    return (
        <div>
            <AddNote />
            <Notes/>


            {message && <Notify message={message} color={properties.color} backgroundColor={properties.backgroundColor} />}
        </div>
    )
}

export default Home
