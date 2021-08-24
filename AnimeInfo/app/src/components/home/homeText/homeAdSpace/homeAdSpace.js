import { Typography } from "@material-ui/core"
import React from "react"
import useStyles from "./styles"


export default function HomeAdSpace(){


    const classes = useStyles()

    return(
        <div className={classes.container}>
            <div className={classes.containerPadding}>
                <Typography className={classes.headline} variant="h1">
                     Die neusten Infos zu deinen Liebsten Animes
                </Typography>
            </div>
        </div>
    )
}