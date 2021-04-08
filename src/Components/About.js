import { Grid, Paper ,makeStyles,Box} from '@material-ui/core'
import about_img from './assets/images/about1.svg'
import React from 'react'
import Fade from 'react-reveal/Fade';

const useStyles =makeStyles(theme=>({
     about:{
        maxWidth:"100%",
        "& p":{
        fontSize:"clamp(16px,2vw,25px)",
         marginBottom:"7px",
         fontFamily:"serif",
         color: "rgb(127, 141, 170)",
         fontWeight:"540"
       },
     },
     img:{
        width:"90%",
        height:"90%",
        maxHeight:"360px",
        margin:"2px auto"
        
     },
     heading:{
        fontSize:"clamp(74px,9vw,120px)",
        margin:"20px auto",
        opacity:"0.9",
        color:"#0b3343",
        textAlign:"center",
        fontFamily:"Poppins,sans-serif",
        [theme.breakpoints.up('md')]:{
            marginBottom:"50px"
          }
     },
     paper:{
        backgroundColor:"rgb(237, 249, 254)",
     },
    
}))

function About() {
    const {about,img,heading,paper} =useStyles();
    return (
        <div className={about} id="about">
         <Box mt={4} pt={3}>
             <Box mt={5} />
            <Grid container >
                <Grid  xs={12} >
                <Fade bottom duration={2500} distance="10px">
                    <h1 className={heading}>About</h1> 
                </Fade>
                </Grid>   
                <Box  mt={4}>
                    
        </Box>
               
                <Grid md ={6} lg={6} align="center">
                <Fade left duration={1000} distance="120px">
                   <div>
                   <img src={about_img} className={img} alt="about vector" /> 
                   </div>
                </Fade>       
                </Grid>
               
                <Grid xs={12}  md={6} lg={6} align="left" >
                    <Box m={4}>
                    <Fade right duration={1000} distance="120px">
                    <Paper className={paper} elevation={0}>
                    <h3 style={{fontSize:"clamp(26px,4vw,42px)",marginBottom:"7px"}}>I'm a<span style={{color:"rgb(0, 28, 85)",fontWeight:"700"}}> Web Developer</span></h3>
                    <p > I am a 2nd second year Computer Science Engineering student at Vellore Institute of Technology Chennai.</p>
                    <p > I am a passionate front end  developer who spends most of my time in either learning new things or reading a fantasy fiction novels. Currently I am exploring more of Node Js and Mongo Db </p>  
                    <p >Other than coding I spend most of my time playing cricket or writing a poem. </p>
                     
                    </Paper>
                    </Fade>
                    </Box>
                  
                </Grid>
                
                
            </Grid>

         </Box>
            
        </div>
    )
}

export default About;
