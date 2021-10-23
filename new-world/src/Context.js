import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const myContext = createContext(null);

export default function Context(props) {

    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios.get("https://the-agency-backend.herokuapp.com/getuser", { withCredentials: true }).then((res) => {
            console.log(res)
            if(res.data) {
                setUserObject(res.data)
            }
        }).catch((res)=>{
        console.log(res)
    })
    },[])
    return(
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}