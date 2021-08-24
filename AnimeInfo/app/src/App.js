import React, {useEffect, useContext} from "react";

import Router from "./router"
import axios from "./axios-instance";
import {authContext} from "./context/authContext"



function App(){
    
    const context = useContext(authContext)

    useEffect(() => {
        (async() => {
            const {data} = await axios.get("/checkAuth/")
            if(data === true){
                context.setLogin()
            }            
        })()
    }, [])


    return(
        <Router/>
    )
}
export default App;