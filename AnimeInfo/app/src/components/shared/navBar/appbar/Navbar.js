import React, {useContext}from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import  useStyles from "./styles"
import { authContext } from '../../../../context/authContext.js';
import axios from "../../../../axios-instance"


function Navbar(props){

   const context = useContext(authContext)
    
    const classes = useStyles()
    return (
       <nav className={classes.navbar}>
           <div className={classes.navContainer}>
                <NavLink to="/" className={classes.navLogo}>
                   AnimeInfo.de
                </NavLink>
            <ul className={classes.navMenu}>
                <li className={classes.navItems}>
                    <NavLink to="/" className={classes.navLinks}>
                        Home
                    </NavLink>
                </li>
                <li className={classes.navItems} >
                    <NavLink to="/ranking" className={classes.navLinks} >
                        Ranking
                    </NavLink>
                </li>
                <li className={classes.navItems}>
                    <NavLink to="/blog" className={classes.navLinks}>
                        Blog
                    </NavLink>
                </li>
                <li className={classes.navItems}>
                    {context.loggoutState && (
                    <NavLink to="/anmeldung" className={classes.navLinks}>
                        Anmelden
                    </NavLink>
                    )}
                </li>
                <li className={classes.navItems}>
                    {context.authState && (
                    <NavLink to="/" className={classes.navLinks}  onClick={async () => {
                       await axios.post("/user/logout");

                      }}>
                        Logout
                    </NavLink>
                    )}
                </li>
                
                
            </ul>
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => props.setNavState(true)} className={classes.navIcon}>
                    <MenuIcon></MenuIcon>
                </IconButton>
            </div>
       </nav>
    )
}


export default Navbar