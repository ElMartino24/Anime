import React, {useState, useEffect, useContext} from 'react'
import {Button, Paper, TextField, Typography, Link} from "@material-ui/core"

import axios from '../../axios-instance';

import useStyles from "./styles"
import UpdateAnime from "./updateAnime/updateAnime"
import { authContext } from '../../context/authContext';



export default function Blog() {
    const classes = useStyles();


    const context = useContext(authContext)

    const [allPosts, setAllPosts] = useState([])

    const [createAnimeFields, setCreateAnimeFields] = useState({
        title:"",
        text:"",
    })

    
        useEffect(() => {

        (async() => {
            try{
                const {data} = await axios.get("http://localhost:8080/api/anime/")
                const animes = data.content;
                setAllPosts(animes)
            }catch(err){
                console.log(err)
            }
        })()
    }, [])
    
    

    const [errorState, setErrorState] = useState(null)



    async function submitHandler (e) {
        e.preventDefault()
        setErrorState(null)
       try{
        const {data} = await axios.post("/anime/createBlog/", createAnimeFields)
        setAllPosts([...allPosts, data.content])
       }catch(err){
           console.log(err)
           setErrorState(err.response.data.message)
       }
    }

    return (

        <Paper elevation={3} className={classes.container}>
            {context.authState && (
                
                <Typography variant="h2" align="center" className={classes.headline}>Create a Post 
                </Typography>
            )}
            {context.authState && (

                <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
                <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    fullWidth
                    name="title"
                    label="title"
                    value={createAnimeFields.title}
                    onChange={(e) => setCreateAnimeFields({...createAnimeFields, title: e.target.value})}
                />
                <TextField
                    className={classes.textarea}
                    minRows={10}
                    multiline
                    variant="outlined"
                    placeholder="New Post"
                    name="text"
                    value={createAnimeFields.text}
                    onChange={(e) => setCreateAnimeFields({...createAnimeFields, text: e.target.value})}
                />
                <Button type="submit" variant="contained" >
                    Erstelle einen neuen Eintrag
                </Button>
                {errorState && <Typography variant="caption" color="error"> {errorState}</Typography>}
                
            </form>
            )}
                   
                        <div >
                        
                            <Typography variant="h1" align="center" className={classes.headline2}> AnimeInfos</Typography>
                            {context.loggoutState && (
                                <div className={classes.subContainer}>
                                    <Typography align="center" className={classes.subText}> Um unseren Blog als Admin zu bearbeiten,
                                        <Link href="http://localhost:3000/anmeldung">{<span> melde dich bitte an </span>}</Link> 
                                            oder <Link href="http://localhost:3000/register"> {<span>registriere dich kostenlos.</span>} </Link></Typography>
                                </div>
                                )} 
                            <UpdateAnime allPosts={allPosts}  setAllPosts={setAllPosts}/>
                            
                       </div>
                     

           
        </Paper>
    )
}