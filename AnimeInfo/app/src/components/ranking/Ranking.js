import React from "react"
import useStyles from "./styles"
import { ImageListItem, Typography, Link } from "@material-ui/core"



export default function Ranking(){

    const classes = useStyles()

    return(
        <div className={classes.container}>
            <div className={classes.container2}>   
                        <div className={classes.containerWrap}>
                        <Link href="/">
                            <div className={classes.containerFlex}>
                                <div className={classes.containerWrap}>
                                <ImageListItem className={classes.imageListItem}>
                                    <img src="../assets/wallpaper.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>                      
                                </ImageListItem>
                                    <div className={classes.containerText}>
                                        <Typography variant="h2" className={classes.secondHeadline}>
                                            Platz 1 Besten Anime-MMORPGs 
                                        </Typography> 
                                            <Typography style={{clor:"white", fontSize:"20px", textDecoration:"underline"}}>
                                                <p>Genshin Impact</p>
                                            </Typography>
                                    </div>
                                    </div>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className={classes.containerFlex}>
                                <div className={classes.containerWrap}>
                                <ImageListItem className={classes.imageListItem}>
                                    <img src="../assets/Bleach.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>                      
                                </ImageListItem>
                                    <div className={classes.containerText}>
                                        <Typography variant="h2" className={classes.secondHeadline}>
                                            Platz 2 Besten Anime-MMORPGs 
                                        </Typography> 
                                            <Typography style={{clor:"white", fontSize:"20px", textDecoration:"underline"}}>
                                                <p>Genshin Impact</p>
                                            </Typography>
                                    </div>
                                    </div>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className={classes.containerFlex}>
                                <div className={classes.containerWrap}>
                                <ImageListItem className={classes.imageListItem}>
                                    <img src="../assets/natsu.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>                      
                                </ImageListItem>
                                    <div className={classes.containerText}>
                                        <Typography variant="h2" className={classes.secondHeadline}>
                                            Platz 3 Besten Anime-MMORPGs 
                                        </Typography> 
                                        <Typography style={{clor:"white", fontSize:"20px", textDecoration:"underline"}}>
                                                <p>Genshin Impact</p>
                                            </Typography>
                                    </div>
                                    </div>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className={classes.containerFlex}>
                                <div className={classes.containerWrap}>
                                <ImageListItem className={classes.imageListItem}>
                                    <img src="../assets/schwert.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>                      
                                </ImageListItem>
                                    <div className={classes.containerText}>
                                        <Typography variant="h2" className={classes.secondHeadline}>
                                            Platz 4 Besten Anime-MMORPGs 
                                        </Typography> 
                                        <Typography style={{clor:"white", fontSize:"20px", textDecoration:"underline"}}>
                                                <p>Genshin Impact</p>
                                            </Typography>
                                    </div>
                                    </div>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className={classes.containerFlex}>
                                <div className={classes.containerWrap}>
                                <ImageListItem className={classes.imageListItem}>
                                    <img src="../assets/schwert3.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>                      
                                </ImageListItem>
                                
                                    <div className={classes.containerText}>
                                        <Typography variant="h2" className={classes.secondHeadline}>
                                            Platz 5 Besten Anime-MMORPGs 
                                        </Typography> 
                                        <Typography style={{clor:"white", fontSize:"20px", textDecoration:"underline"}}>
                                                <p>Genshin Impact</p>
                                            </Typography>
                                    </div>
                                    </div>
                                    
                            </div>
                            </Link>
                        </div>
                </div>
        </div>
    )
}