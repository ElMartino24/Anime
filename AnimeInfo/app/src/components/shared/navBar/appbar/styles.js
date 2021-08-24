import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => {
    return {
        navbar:{
            height:'80px',
            display: 'flex',
            justifyContent: 'center',
            background: "linear-gradient(0.50turn, #000000, #A20000, #000000)",
            fontSize:"1,2rem",
            alignItems:"center",
            top:"0",
            zIndex:"20",
        },navContainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"80px",
            maxWidth:'1500px',
        },navLogo:{
            color:'white',
            alignItems:"center",
            marginLeft:'20px',
            cursor:'pointer',
            textDecoration:'none',
            fontSize:'2rem',
            flexGrow:'1',
            fontWeight:"bold",
        },navMenu:{
            display:'flex',
            listStyle:'none',
            textAlign:'center',
            marginRight:'2rem',
        },navLinks:{
            color:'#fff',
            textDecoration:'none',
            padding:'0,5rem',
            height:'100%',
            borderBottom:'3px solid transparent',
            [theme.breakpoints.down('sm')]: {
                display:'none',
              },
        },navItems:{
            lineHeight:'40px',
            marginRight:'1rem',
        },navIcon:{
            display:'none',
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                display:'block',
              },
        },
        
    }
})

export default styles