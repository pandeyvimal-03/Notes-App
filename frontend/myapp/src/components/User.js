import React , {useContext} from 'react'
import UserContext from '../context/user/userContext'
import Notes from './Notes'
import Login from './Login'
import { Link } from 'react-router-dom'
import '../css/User.css'


function User() {
    const { LogedIn } = useContext(UserContext)
  return (
    <div className='user'>
      {
         LogedIn ? (
           <div>
            <div className="outlink"> <Link to="/logout">Logout</Link></div>
             <Notes/>
            
            </div>
          
         ) : (<Login/>)
      }
    </div>
  )
}

export default User
