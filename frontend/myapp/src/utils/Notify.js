import React, { useEffect, useState } from 'react'
import '../css/Notify.css'

function Notify(props) {
    
    const [show, setShow] = useState(false);
    useEffect(() => {
       
       setTimeout(() => {
            setShow(true)
        }, 500)
    })

    return (
        <div className='notify'>
            <div className='msg' style={{color : props.color}}>
                {props.message}
            </div>
            {show && <div className="some" style={{backgroundColor: props.backgroundColor}}></div>}

        </div>
    )
}

export default Notify
