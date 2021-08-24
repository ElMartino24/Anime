import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {

    return{
        title:{
            fontFamily:"Comic Neue",
            padding:"25px",
            fontSize:"25px",
            color:"white",
            overflow:"hidden"
        },container:{
            padding:"20px",
            background: "linear-gradient(50deg, rgba(160,0,0,.8), rgba(130,0,0,0) 100%)",
            opacity:"0.8",
            
        },username:{
            fontSize:"15px",
            fontFamily:"Comic Neue",
            padding:"15px",
            textAlignLast:"right",
            color:"white"

        },text:{
            fontFamily:"Comic Neue",
            fontSize:"20px",
            textAlign:"center",
            color:"white",
            overflow:"hidden",
            marginBottom:"55px",
            
        },updateFields:{ 
            background: "linear-gradient(50deg, rgba(70,0,0,.8), rgba(130,0,0,0) 100%)",   
        },containerAll:{
            background: "rgba(70,0,0,.8)",
            padding:"20px",
            
        },display:{
            display:"flex",
            justifyContent:"space-between",
            
        }
            
        
        
    }
})


export default useStyles