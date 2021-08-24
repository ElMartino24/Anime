import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => {
    return{
        container:{
            maxWidth:"100%",
            height:"50%",
            fontFamily:"Comic Neue",
            background: "linear-gradient(160deg, rgba(190,0,0,.8), rgba(190,0,0,0) 100%)"
        },container2:{
            padding:"25px",
            maxWidth:"100%",
        },containerWrap:{
            display:"flex",
            flexWrap:"wrap",  
            width:"100%",
        },imageListItem:{
            listStyle:"none",
        },containerFlex:{
            display:"flex",
            justifyContent:"around",
            marginTop:"55px",
            width:"100%",
            border:"1px solid white",
            textAlign:"center"
        },secondHeadline:{
            fontSize:"25px",
            widht:"100%",
            marginBottom:"15px",
        },containerText:{
            padding:"29px",
            margin:"15px",
            marginLeft:"15px",
            textAlign:"left",
            color:"white",
        },image:{
            height:"150px",
            
        }
        
    }
})


export default useStyles