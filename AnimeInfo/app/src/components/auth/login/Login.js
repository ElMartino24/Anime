import React, {useState, useContext} from "react"
import {Paper, Typography, TextField, Button} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import axios from "../../../axios-instance"
import { authContext } from "../../../context/authContext";



export default function Login() {
    const classes = useStyles();

    const context = useContext(authContext)

    const [loginState, setLoginState] = useState({
        username: "",
        password: "",

    })

    const [errorState, setErrorState] = useState(null)

    async function submitHandler(e){
        e.preventDefault();
        setErrorState(null)
        try{
            const {data} = await axios.post("/user/login", loginState)
            console.log(data)
            if(data.isSuccess === true){
                context.setLogin()
            }
        }catch(err){
            setErrorState(err.response.data.message)
        }

    }

    
    return (
        <div className={classes.container}>
        <Paper elevation={3} className={classes.background}>
            
            <Typography variant="h2" align="center" className={classes.headline}>Anmelden </Typography>
            <div className={classes.createAccount}>
                <form onSubmit={(e) => {submitHandler(e)}} >
                    <TextField 
                    className={classes.inputField}
                    variant="outlined"
                    fullWidth
                    name="username"
                    label="username"
                    value={loginState.username}
                    onChange={(e) => {setLoginState({...loginState, username: e.target.value})}}
                    />
                    <TextField 
                    className={classes.inputField}
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    value={loginState.password}
                    onChange={(e) => {setLoginState({...loginState, password: e.target.value})}}
                    />
                   
                     <Button type="submit" variant="contained" color="primary" >
                        Login
                    </Button>
                    
                </form>
               
            </div>
            {errorState && <Typography variant="caption" color="error">{errorState}</Typography>}
                <Typography variant="caption" className={classes.text2}> Noch Kein Account?</Typography>
                    <Link to="/register" className={classes.link}>
                        Register
                    </Link>
                    
        </Paper>
        </div>
    )
}

