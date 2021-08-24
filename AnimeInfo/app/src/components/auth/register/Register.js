import React, {useState, useContext} from "react"
import {Paper, Typography} from "@material-ui/core";
import { TextField, Button } from "@material-ui/core"
import useStyles from "./styles";
import axios from "../../../axios-instance"
import { Link } from "react-router-dom";
import { authContext } from "../../../context/authContext";


export default function Register() {
    const classes = useStyles();
    const context = useContext(authContext)
   
    const [createRegisterFields, setCreateRegisterFields] = useState({
        username: "",
        email: "",
        password: ""

    })
    


    const [errorState, setErrorState] = useState(null)

   async function createAccountHandler(e){
        e.preventDefault()
        setErrorState(null)
        try{
            const {data} = await axios.post("/user/register/", createRegisterFields )
           if(data.isSuccess === true){
               context.setLogin();
           }
        } catch(err){
            setErrorState(err.response.data.message)
        }
    }
    console.log(errorState)

    return (
        <Paper elevation={3} className={classes.blog}>
            <Typography variant="h2" align="center">Register </Typography>
            <div className={classes.createAccount}>
                <form onSubmit={(e) => createAccountHandler(e)}>
                    <TextField 
                    className={classes.inputField}
                    variant="outlined"
                    fullWidth
                    name="username"
                    label="username"
                    value={createRegisterFields.username}
                    onChange={(e)  =>
                    setCreateRegisterFields({...createRegisterFields, username: e.target.value})
                    }
                    />
                    <TextField 
                    className={classes.inputField}
                    variant="outlined"
                    fullWidth
                    name="email"
                    label="email"
                    value={createRegisterFields.email}
                    onChange={(e)  =>
                        setCreateRegisterFields({...createRegisterFields, email: e.target.value})

                    }
                    />
                    <TextField 
                    className={classes.inputField}
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    value={createRegisterFields.password}
                    onChange={(e)  =>
                        setCreateRegisterFields({...createRegisterFields, password: e.target.value})

                    }
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Registrieren
                    </Button>
                    {errorState && <Typography variant="caption" color="error">{errorState}</Typography>}  
                    <Typography variant="caption" className={classes.text2}> Account Existiert bereits? </Typography>
                    <Link to="/login" className={classes.link}>
                        Login
                    </Link>
                </form>

            </div>
            
            

        </Paper>
    )
}

