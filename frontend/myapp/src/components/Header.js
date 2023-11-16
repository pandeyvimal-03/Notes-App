import  React, {useContext} from 'react';
import '../css/Header.css';
 import  {Link}  from 'react-router-dom';
 import UserContext from '../context/user/userContext';


function Header (){

    const {LogedIn } = useContext(UserContext)

    
  
     return (
        <div className="header">
        <div className="logo">
          V-Notes
        </div>
        <nav className="navMenu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notes">Notes</Link></li>
          
           
        </nav>
         <div className="logButton">
            
         {LogedIn ? (
    <Link to="/logout">Logout</Link>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup" >Signup</Link>
    </>
  )}
             
        </div> 
    </div>
    );
  
 
}

export default Header;