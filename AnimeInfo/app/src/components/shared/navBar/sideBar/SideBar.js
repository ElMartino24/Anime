import React, {useContext} from "react"
import { Drawer, ListItem, List, Divider, ListItemText, IconButton, ListItemIcon } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {NavLink} from "react-router-dom"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { authContext } from "../../../../context/authContext";





export default function SideBar(props){

    const context = useContext(authContext)

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: drawerWidth,
        },
        title: {
          flexGrow: 1,
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
          justifyContent: 'flex-start',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginRight: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      }));

const classes = useStyles();
const theme = useTheme();

    return(
        <div>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.navState}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => {props.setNavState(false)}}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

          
          <NavLink to="/">
              <ListItem button >
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                      <ListItemText primary="home" />
              </ListItem>
          </NavLink>


            <NavLink to="/about">
                <ListItem button >
                    <ListItemIcon><AccessibilityNewIcon /></ListItemIcon>
                        <ListItemText primary="about"  />
                </ListItem>
            </NavLink>
            <NavLink to="/blog">
                <ListItem button >
                    <ListItemIcon><TextsmsIcon /></ListItemIcon>
                        <ListItemText primary="blog"  />
                </ListItem>
            </NavLink>
            {context.loggoutState && (
            <NavLink to="/anmeldung">
                <ListItem button >
                    <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                        <ListItemText primary="Login"  />
                </ListItem>
            </NavLink>
            )}
            {context.authState && (
            <NavLink to="/">
                <ListItem button >
                    <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                        <ListItemText primary="Logut"  />
                </ListItem>
            </NavLink>
            )}
        </List>
        
      </Drawer>
      </div>
    )
}