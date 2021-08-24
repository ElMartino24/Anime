import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => {

    return{
        container:{
            height:"200px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background: "linear-gradient(0.50turn, #060606, #060606, #7D0000)",
            
            
        },headline:{
            fontFamily:"Comic Neue",
            fontSize:"30px",
            fontWeight:"bold",
            color:"white",
  
        }
    }
})


export default useStyles