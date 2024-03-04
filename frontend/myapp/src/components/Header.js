import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import logo from '../images/BookSvg2.svg'
// import logo from '../images/BookSvg3.svg'
import home from '../images/HomeSvg.svg'
import user from '../images/user.svg'


function Header() {

  



  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt='img'/>
      </div>
      <nav className="navMenu">
        <li><Link to="/"><img src={home} alt='img'/><span>Home</span></Link></li>
        <li><Link to="/user"><img src={user} alt='img'/><span>User</span></Link></li>


      </nav>
      {/* <div className="logButton">

        {LogedIn ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" >Signup</Link>
          </>
        )}

      </div> */}
    </div>
  );


}

export default Header;