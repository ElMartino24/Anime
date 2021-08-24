import React,{useContext} from 'react'
import { Typography} from "@material-ui/core"
import useStyles from "./styles"
import { authContext } from '../../../context/authContext';
import UpdateAnimeForm from './updateForm/updaAnimeForm';


export default function UpdateAnime(props){

    const context = useContext(authContext)

    const classes = useStyles()

    
    

return (
    <div>
        
        


        {
            props.allPosts.map((anime) => {
                return(<div className={classes.containerAll}>
                    <Typography variant="h4" className={classes.title}> {anime.title}  </Typography>
                        <div key={anime._id} className={classes.container}>
                            <div className={classes.display}>
                                <div className={classes.textArea}>
                                    <Typography  className={classes.text} > {anime.text} </Typography>
                                </div>
                                <Typography variant="h4" className={classes.username}> {anime.userId.username} </Typography>
                                </div>
                            {context.authState && (
                                <div className={classes.updateFields}>
                                    <UpdateAnimeForm anime={anime} allPosts={props.allPosts} setAllPosts={props.setAllPosts} />
                            </div>
                            )}
                
                        </div>
                        </div>
                    
                )
            })
        }
    </div>
)}