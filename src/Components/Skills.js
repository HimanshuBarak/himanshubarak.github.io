import React from 'react'
import { Grid, Paper ,makeStyles,Box} from '@material-ui/core'
import SkillImage from "./SkillImage";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



const useStyles =makeStyles(theme=>({
    root:{
       maxWidth:"100%"
    },
   
    heading:{
       fontSize:"clamp(74px,9vw,120px)",
       margin:"22px auto",
       opacity:"0.9",
       color:"#0b3343",
       textAlign:"center",
       fontFamily:"Poppins,sans-serif",
       [theme.breakpoints.up('md')]:{
        marginBottom:"50px",
        marginTop:"40px"
      }
    },
    skills_text:{
        '& p':{
            fontSize:"clamp(16px,2vw,30px)",
            marginBottom:"7px",
            fontFamily:"serif",
            color: "rgb(127, 141, 170)",
           
        },
    },
    paper:{
        backgroundColor:"rgb(237, 249, 254)",
     },
    skill_bar:{
        fontSize:"clamp(16px,3vw,30px)",
        margin:"0px",
        padding:"10px",
        display:"block",
        backgroundColor:"rgb(0, 28, 85)",
        color:"rgb(237, 249, 254)"
    },
   
}))

function Skills() {
    const {heading,skill_bar,skills_text,paper}=useStyles();
   
    return (
        <div id="skills">
           <Box mt={4}>
           <Grid container>
               <Grid xs={12}>
               <Fade bottom duration={2500} distance="20px">
                      <h1 className={heading}>Skills</h1>
                </Fade>      
               </Grid>
             
              <Grid container md={6} lg={6} align="center" >
                <Box m={3}>
                       
               <Paper >
               <Zoom >
               <p className={skill_bar}>Full Stack Development</p> 
               </Zoom>     
                
                <Grid container m={4}> 
               <Grid item xs={6} sm={3} className="skill-item">
                    <SkillImage src="html.svg" name="CSS" /> 
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="css3.svg" name="CSS" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="javascript.svg" name="Javascript" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="c++.svg" name="Bootstrap" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="react.svg" name="React" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="nodejs.svg" name="Redux" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="mongodb.svg" name="React Native" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="python.svg" name="Python" />
				</Grid>
                <Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="material-ui.svg" name="Python" />
				</Grid>
                <Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="bootstrap.svg" name="Python" />
				</Grid>
                </Grid> 
               
               </Paper>
               </Box>  
                </Grid>
             
                <Grid md={6} lg={6}>
                     <Box ml={4} mr={4} mb={4} mt={3}>
                         <Paper class={paper} elevation={0}>
                         <Fade right duration={1000} distance="70px">   
                          
                             <div className={skills_text}>
                                
                                 <p >⚡ Building responsive websites and webapps in React.</p>
                                 <p >⚡ Building websites using Html and CSS and Vanilla JS.</p>
                                 <p >⚡ Full Stack using MERN.</p>
                                 <p >⚡ Robust knowledge of Data Structures and  Algorithms.</p>
                                 <p> ⚡ Strong command over writing programs in Python and C++. </p>
                                  <p>⚡ Working with Git and Github.  </p>

                             </div>
                          
                      </Fade>
                         </Paper>
                     
                     </Box>
                    
                </Grid>        
             </Grid>    
          </Box> 
        </div>
    )
}

export default Skills
