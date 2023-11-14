import UserContext from "./userContext";
import React ,{useState} from 'react'

function UserState(props) {
    const [LogedIn , setLogedIn] = useState(false)
    const change = ()=>{

    }
  return (
    
    <UserContext.Provider value={{LogedIn, setLogedIn, change}}>
        {props.children}
    </UserContext.Provider>

  )
}

export default UserState
