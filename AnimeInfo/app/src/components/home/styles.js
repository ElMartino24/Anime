import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => {
        return{
            background:{
                width:"100%",
                marginTop:"2px",
                overflow:"hidden",
                height:"auto",
                
            },container:{
                marginBottom:"2px",            
            },imageListItem:{
                listStyle:"none",
            },image:{
                width:"100%",
                height:"auto",
            },imageListItemBar:{
                width:"100%",
                height:"auto",
            },secondImage:{
                width:"100%",
                
            },containerWrap:{
                display:"flex",
                flexWrap:"wrap",
                width:"100%"
            }
        }
})


export default useStyles