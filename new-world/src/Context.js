import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const myContext = createContext({});

const reload = () => {

        if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }


export default function Context(props) {

    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios.get("https://the-agency-backend.herokuapp.com/getuser", { withCredentials: true }).then((res) => {
            
            if(res.data) {
                setUserObject(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))
                reload()
                
            }
        }).catch((err)=>{
        console.log(err)
        return(err)
    })
    },[])
    return(
        <myContext.Provider value={{userObject, setUserObject}}>{props.children}</myContext.Provider>
    )
}