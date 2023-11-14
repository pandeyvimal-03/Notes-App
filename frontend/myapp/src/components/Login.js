import React, { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Notify from '../utils/Notify';

import '../css/Login.css'

function Login() {

    const { setLogedIn} = useContext(UserContext)
    const navigate = useNavigate();
    const [credentials , setCredentials] = useState({email : "" , password : ""})
    const [message, setMessage] = useState("")
    const [properties, setProperties] = useState({ color: "", backgroundColor: "" })

    const formSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ email: credentials.email,  password: credentials.password })
        })

        const response = await res.json();
        if (response.success) {
            setCredentials({ ...credentials,  email: "", password: "" })
            setProperties({ ...properties, color: "green", backgroundColor: "green" })
            setLogedIn(true)
            navigate('/',{state : {check : 'hello' , message : response.message , color: "green", backgroundColor: "green"}});
           


        }
        else {

            setMessage(response.message)
            setProperties({ ...properties, color: "red", backgroundColor: "red" })
             setTimeout(() => {
                setMessage("")
             }, 5000)

        }

    }

    const change = (e)=>{

        setCredentials({...credentials , [e.target.name] : e.target.value})

    }

  return (
    <div className='login'>
        {message && <Notify message={message} color={properties.color } backgroundColor={properties.backgroundColor} />}
        <h3>Login to use <span>V-Notes</span></h3>
        <form className='form' onSubmit={formSubmit}>
            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={change}/>
            <input type="password" name="password" id="password" placeholder='Enter your password'onChange={change} />
            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default Login
