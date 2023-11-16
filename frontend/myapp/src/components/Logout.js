import React, {useContext , useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import NoteContext from '../context/notes/noteContext';

function Logout() {
    const { LogedIn,setLogedIn } = useContext(UserContext)
    const { setNotes} = useContext(NoteContext)
    const navigate = useNavigate()

    const logout = async () => {

        console.log(LogedIn)
        try {
            const res = await fetch('http://localhost:4000/api/logout', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            });

            const response = await res.json()
            console.log(response)
    
            if (response.success ) {
                setLogedIn(false);
                console.log(setLogedIn)
                setNotes(null)
                return navigate('/login');
            } else {
                console.error('Logout failed:', res.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    
        navigate('/');
    };
    
    useEffect(()=>{

        logout()
    },[])

    
   
  return (
    <div>
      
    </div>
  )
}

export default Logout
