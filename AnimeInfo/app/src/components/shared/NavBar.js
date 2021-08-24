import React from "react";

import AppBar from "./appbar/Navbar"
import SideDrawer from "./sidebar/sideDrawer";


function NavBar(){

    return(
        <div>
            <AppBar />
            <SideDrawer/>
        </div>
    )
}

export default NavBar