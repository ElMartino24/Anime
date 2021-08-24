import React, {useState} from "react";

export const authContext = React.createContext();

export default function AuthProvider(props){


    const [authState, setAuthState] = useState(false)

    const [loggoutState, setLoggedState] = useState(true)

    function setLogin(){
        setAuthState(true)
        setLoggedState(false)
    }

    



    return(
        <authContext.Provider value={{authState, setLogin, loggoutState}}>
            {props.children}
        </authContext.Provider>
    );
}