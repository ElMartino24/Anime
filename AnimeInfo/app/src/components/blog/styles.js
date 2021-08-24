import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(theme => {
    return{
headline:{
        textAlign:"left",
        padding:'20px',
        color:'white',
        fontSize:'40px',
        fontFamily:'Comic Neue',
        fontWeight:'bold',
    },form:{
        maxWidth:'50%',
        margin:"15px",
        textAlign:"center",
    },textarea:{
        width:"100%",
        fontSize:"15px",
        fontFamily:"Comic Neue",
        fontWeight:"bold",
        backgroundColor:"white",
        opacity:"0.7",
    },headline2:{
        fontFamily:"Comic Neue",
        color:"white",
        textAlign:"left",
        fontSize:"40px",
        padding:"20px",
        fontWeight:"bold",
        borderBottom:"1px solid white",

    },container:{
        background: "linear-gradient(25deg, rgba(190,0,0,.8), rgba(190,0,0,0) 100%)"
    },subContainer:{
        margin:"25px",
        display:"flex",
        flexWrap:"wrap",
        backgroundColor:"#87CEFA",
        boxShadow:"inset 0px 0px 0px 5px #20B2AA",
        padding:"20px",
        
    },inputFields:{
        backgroundColor:"white",
        opacity:"0.7",
        
    }
}
})