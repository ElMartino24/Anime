import React from "react"
import { Container } from "@material-ui/core"


import useStyles from "./styles"

export default function Main(props){


  const classes = useStyles()

    return(
        <div className={classes.background}>
            <div>
                <Container maxWidth="lg" disableGutters={true} >
                    <main >
                        {props.children}
                    </main>
                </Container>
            </div>
        </div>
    )
}