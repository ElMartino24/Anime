import React, {useState} from "react"
import { TextField, Button, Typography } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import axios from "../../../../axios-instance"
import useStyles from "./styles";



export default function updateAnimeForm(props){
    const {title, text} = props.anime

    

    const [animeState, setAnimeState] = useState({title, text})

    const filteredState = props.allPosts.filter((anime) => anime._id !== props.anime._id)

    
    const classes = useStyles()
    
    const [errorState, setErrorState] = useState(null)
    async function buttonHandler(e){
        e.preventDefault()
        try{
            const {data} = await axios.patch("/anime/updateBlog/", {title: animeState.title, text: animeState.text, id: props.anime._id})
            props.setAllPosts([ data.content, ...filteredState])
        }catch(err){
            setErrorState(err.response.data.message)
        }
    }



    async function deleteHandler(e){
        e.preventDefault()
        try{
            await axios.post("/anime/deleteBlog/", {id: props.anime._id, userId: props.anime.userId})
            props.setAllPosts([...filteredState])
        }catch(err){
            console.log(err)
        }
        
    }
    

return(




    <div className={classes.container}>
        <div className={classes.containerFlex}>         
            <TextField
            minRows={5}
            variant="outlined"
            label="Update Title"
            onChange={(e) => setAnimeState({...animeState, title: e.target.value})}

            >
            </TextField>
            <TextField
            minRows={5}
            variant="outlined"
            label="Update Text"
            multiline
            color="primary"
            onChange={(e) => setAnimeState({...animeState, text: e.target.value})}
            />
            </div>  
            <Button variant="contained"  onClick={(e) => buttonHandler(e)}>
                <UpdateIcon/>
             </Button>
             
            <Button variant="contained"   onClick={(e) => deleteHandler(e)} >
                <DeleteIcon/>
            </Button>
            {errorState && <Typography variant="caption" color="error">{errorState}</Typography>}
            
    </div>
)
}