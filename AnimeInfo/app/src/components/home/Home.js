import React from 'react'
import useStyles from './styles'
import {  Box,  Link, ImageListItem, ImageListItemBar } from '@material-ui/core';
import HomeAdSpace from './homeText/homeAdSpace/homeAdSpace';



function Home(){

    const classes = useStyles()

    return (
            <div className={classes.background}> 
                    <div className={classes.container}>
                        <Box display="Flex" >
                                <Box flexGrow={1} style={{marginRight:"2px"}}>      
                                        <Link href="https://www.thalia.de/shop/home/artikeldetails/ID116433635.html?ProvID=11000522&gclid=EAIaIQobChMIk-PE7e-_8gIVDWYYCh1XkAB1EAQYASABEgJG-_D_BwE">
                                                <ImageListItem className={classes.imageListItem}>
                                                        <img src="../assets/ghoulImg.jpg" alt="Tokyou Ghoul Toka" className={classes.image}/>
                                                                <ImageListItemBar
                                                                        title="Tokyo Ghoul Complete Box Set"
                                                                        subtitle={<span>by: thalia.de</span>}
                                                                        className={classes.imageListItemBar}
                                                                />
                                                                
                                                </ImageListItem>
                                        </Link>               
                        </Box>
                       
                                <Box flexGrow={1}>
                                        <Link href="https://www.sukipan.com/de/Anime-Figuren/anime-serien-p-z/Tokyo-Ghoul/">
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/tokyImg.jpg" alt="Tokyou Ghoul Ken Kaneki " className={classes.image}/>
                                                        <ImageListItemBar
                                                                title="Tokyo Ghoul Kaneki Figur "
                                                                subtitle={<span>by: sukipan.de</span>}
                                                                className={classes.imageListItemBar}            
                                                        />
                                                        
                                        </ImageListItem>
                                        </Link>
                                </Box>
                        </Box>
                        </div> 
                        <Box display="Flex" >
                               <Box flexGrow={1} style={{marginRight:"2px"}}>
                                       <Link hreaf="https://boruto-manga.net/manga/boruto-chapter-61-madness/">
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/narutoImg.jpg" alt="Naruto & Sasuke" className={classes.secondImage}/>
                                                        <ImageListItemBar
                                                                title="Boruto Kapitel 61 neu erscheinung!"
                                                                subtitle={<span>by: boruto-manga.net</span>}
                                                                className={classes.imageListItemBar}/>
                                        </ImageListItem>
                                        </Link>
                                </Box>
                                        
                                        <Box flexGrow={1} style={{marginRight:"2px"}}>
                                        <Link href="http://naruto-tube.org/">
                                                <ImageListItem className={classes.imageListItem}>
                                                        <img src="../assets/kakashi.jpg" alt="Naruto Kakashi shidori" className={classes.image}/>
                                                                <ImageListItemBar
                                                                        title="Neue Boruto Manga Folge!"
                                                                        subtitle={<span>by: Naruto-tube.com</span>}
                                                                        className={classes.imageListItemBar}/>
                                                </ImageListItem>
                                                </Link>
                                </Box>
                                        <Box flexGrow={1}>
                                                <Link href="https://www.weltbild.de/artikel/film/naruto-die-komplette-serie_19605699-1?wea=59544223&gclid=EAIaIQobChMIzpPJyfO_8gIV8AWiAx0kKga-EAQYAyABEgKILfD_BwE">
                                                <ImageListItem className={classes.imageListItem}>
                                                        <img src="../assets/narutoImg.jpg" alt="Naruto & Sasuke" className={classes.secondImage}/>
                                                                <ImageListItemBar
                                                                        title="Naruto- Die komplette Serie"
                                                                        subtitle={<span>by: Weltbild.de</span>} 
                                                                        className={classes.imageListItemBar}/>
                                                </ImageListItem>
                                                </Link> 
                                </Box>
                        </Box>
                        <HomeAdSpace/>
            </div>
        
    )
}


export default Home