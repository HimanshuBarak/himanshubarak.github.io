import React from 'react'
import { Grid, makeStyles,Box,Paper,Button,Avatar,createMuiTheme,ThemeProvider} from '@material-ui/core'
import github_icon from './assets/Icons/github.svg'
import Fade from 'react-reveal/Fade'; 
import projects from '../Data/Project';
import Flip from 'react-reveal/Flip';
const theme = createMuiTheme({      
  typography: {
    button: {
      textTransform: 'none',
    },
  
  }
});

const useStyles =makeStyles(theme=>({
    root:{
     
    }, 
    heading:{
       fontSize:"clamp(74px,9vw,120px)",
       margin:"6px auto",
       opacity:"0.8",
       color:"#0b3343",
       textAlign:"center",
       fontFamily:"Poppins,sans-serif",
       [theme.breakpoints.up('md')]:{
        marginBottom:"50px",
        marginTop:"40px"
      }
    }, 
    paper:{
     padding:"17px",
     background: "#a3e3fb",
     color:"rgb(0, 28, 85)",
     borderRadius:"0px",
     "& p":{
       margin:"14px 0px 8px 0px",
       fontFamily:"Google Sans, Medium Montserrat,sans-serif",
        color:"rgb(54, 82, 136)"
     },
     "& h1":{
       display:"inline",
       marginLeft:"5px",
       fontFamily:"Montserrat,sans-serif"
     },
     
     "&:hover":{
      boxShadow:" 0 15px 30px -15px rgb(0 0 0 / 20%)"
     }
     
    },
    t_stack:{
      color:"#537df8",
      marginBottom:"8px",
      display:"block",
      "& strong":{
        color:"black",
        fontWeight:"900"
      }
    },
    btn_links:{
         marginTop:"20px",
         display:"flex",
         "& button":{
          padding:"5px 12px 5px 12px",
          backgroundColor:"rgb(0, 28, 85)",
          fontFamily:"Montserrat,sans-serif",
          fontSize:"clamp(12px,2vw,16px)",
          color:"rgb(237, 249, 254)",
          borderRadius:"5px",
          letterSpacing:"1px",
          "&:hover":{
            transition: "all .4s ease-in-out",
            backgroundColor:"#a3e3fb",
            border:"1px solid rgb(0, 28, 85)",
            color:"rgb(0, 28, 85)",
            boxShadow:"none"
          }
           
         },
         justifyContent:"space-between",
         "& a":{
             textDecoration:"none"
         }
    },
    icon:{
      "&:hover":{
        transition: "all .4s ease-in-out",
        transform:"scale(1.2)",
       
       }
    }
   
}))
function Projects() {
    const { heading,root,paper,btn_links,t_stack,icon}=useStyles();
    return (
        <div id="projects">
           <ThemeProvider theme={theme}>
           <Flip top>
           <h1 className={heading}>Projects</h1>
           </Flip>
            <Box m={5}  >
            <Grid container spacing={2} className={root} >  
             {projects.map((project)=>{
               return <Grid item sm={12} md={6} lg={4}  >     
               <Fade bottom duration={2500} distance="10px">
                 <Paper className={paper} elevation={0}>
                   <svg aria-hidden="true"  height="16" role="img" viewBox="0 0 12 16" width="12">
                       <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
                  </svg>
                     <h1 >{project.name}</h1>
                     <p>{project.description}</p> 
                      <span className={t_stack}><strong>Tech Stack: </strong>{project.tech}</span>
                     <div className={btn_links}>
                     <a  href={project.link} target="_blank"><Button variant="contained" color="primary">View Website</Button></a>
                     <a  classNmae ={icon} href={project.git} target="_blank"><Avatar alt="Github_icon" src={github_icon} /></a>
                     </div>              
                   </Paper>
                   </Fade>
                </Grid>
             })}
                 
            </Grid>
            </Box>
           </ThemeProvider>
            
        </div>
    )
}

export default Projects
