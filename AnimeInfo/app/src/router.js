import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";

import NavBar from "./components/shared/navBar/appbar/Navbar"
import About from "./components/ranking/Ranking"
import Blog from "./components/blog/Blog"
import Home from "./components/home/Home";
import Main from "./components/shared/containers/Main"
import Anmeldung from "./components/auth/Anmeldung";
import Register from "./components/auth/register/Register"
import Login from "./components/auth/login/Login"
import SideBar from "./components/shared/navBar/sideBar/SideBar";
import Ranking from "./components/ranking/Ranking";



function Router() {

   const [navState, setNavState] = useState(false)
    return (
        <div>
            
            <Main>
            <NavBar setNavState={setNavState}/>
            <SideBar navState={navState} setNavState={setNavState}/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/ranking" component={Ranking}/>
                <Route path="/anmeldung" component={Anmeldung}/>
                <Route path="/login" component={Login}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/" component={Home}/>
               
            </Switch>
            </Main>
            
        </div>
    )
}


export default Router;