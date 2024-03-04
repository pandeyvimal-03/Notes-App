import React, { useState , useContext } from 'react'
import { useNavigate , Link} from 'react-router-dom';
import UserContext from '../context/user/userContext';


// import codeImage from '../images/codeImage.jpg'
import '../css/Signup.css'
import Notify from '../utils/Notify';





function Signup() {

    const { setLogedIn} = useContext(UserContext)
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("")
    const [properties, setProperties] = useState({ color: "", backgroundColor: "" })

    const formSubmit = async (e) => {
        e.preventDefault();
        
        

           const res = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ email: credentials.email, name: credentials.name, password: credentials.password })
        })

        const response = await res.json();
       
        if (response.success) {
            setCredentials({ ...credentials, name: "", email: "", password: "" })
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
    const change = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

   

    return (
        <div className='signUp'>
        {message && <Notify message={message} color={properties.color } backgroundColor={properties.backgroundColor} />}
        <h3>Signup to use <span>V-Notes</span></h3>
        <form className='form' onSubmit={formSubmit}>
             <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={change} />
            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={change}/>
            <input type="password" name="password" id="password" placeholder='Enter your password'onChange={change} />
            <button type='submit'>Submit</button>

        </form>
        <div className='bottomtext'>---------  &nbsp; already have account &nbsp;&nbsp;&nbsp;&nbsp;: <Link to='/login'>Login</Link></div>
      
    </div>
    )
}

export default Signup
