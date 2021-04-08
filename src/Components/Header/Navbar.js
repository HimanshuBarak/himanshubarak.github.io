import React,{useEffect,useState} from 'react'
import {AppBar ,Toolbar, Container ,makeStyles,Button, IconButton ,Drawer, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import HideOnScroll from './HideOnScroll';

const usestyles = makeStyles({
    root:{
       
        display:'flex',
        justifyContent:'space-between' ,
        maxWidth:'700px',       
    },
    transpt:{
      background: 'transparent', boxShadow: 'none',zIndex:"1"
    },
   menubtn:{
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 500,
    color: "rgb(0, 28, 85)",
    padding:"10px 20px",  
    fontSize:"19px",
    "&:hover":{
    background:"#a3e3fb"
    }
    },
    menuicon:{
      edge: "start",color: "#0b3343",
    },
    clearicon:{
      edge: "end",color: "#0b3343",textAlign:"right"
    },
    drawerContainer: {
      padding: "20px 30px",
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 500,
      background:"rgb(237, 249, 254)",
      color:"#0b3343",
      textDecoration:"none",
     
    }
})

const menudata = [
    {
      label: "Home",
      href: "home",
    },
    {
      label: "About",
      href: "about",
    },
    {
      label: "Skills",
      href: "skills",
    },
    {
      label: "Projects",
      href: "projects",
    },
    {
      label: "Contact",
      href: "contact",
    },
  ];


function Navbar() {
     const [state, setState] = useState({mobileview:false,draweropen:false});
     const {mobileview,draweropen} = state;
     const {menuicon,root,drawerContainer,transpt,clearicon,menubtn} =usestyles();
    
//yet to target link for the smooth scroll
function MenuButtons({menudata}){
  const {menubtn} = usestyles();

    return (<Fade top duration={1500} distance="40px">
     
        
           {menudata.map(({label,href})=> <Button className={menubtn}><Link to={href} spy={true} smooth={true}  >{label}</Link></Button> )}
    
     </Fade>)
} 

  //to display navbar on desktop screen
  function displaydesktop(){
    
    return <div style={{height:"60px",background:"rgb(237, 249, 254)"}}>
      <Toolbar ><Container maxWidth={false} className={root}><MenuButtons menudata={menudata}/> </Container>   </Toolbar>
      
      </div>
  }
//to display navbar on mobile screen
  function displaymobile(){
    
    const togggledrawer = value=>{
      setState({...state,draweropen:value});
      console.log(draweropen)
    }
    
  function getDraweritem(){
   
     return menudata.map(({label,href})=>{
        return <Link to={href} spy={true} smooth={true} >
           <MenuItem className={menubtn}>{label}</MenuItem>
         </Link> 
     })

     
  }
    return <div style={{height:"50px",background:"rgb(237, 249, 254)"}}>
          <Toolbar>
      <IconButton className={menuicon} onClick={()=>togggledrawer(true)} >
        <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={draweropen} onClose={()=>togggledrawer(false)}>
          <div className={drawerContainer}>
          <div style={{textAlign:"right"}}>
            <IconButton className={clearicon} onClick={()=>togggledrawer(false)}> <ClearIcon /></IconButton>
            </div>
           
            {getDraweritem()}
            </div>
        </Drawer>
      </Toolbar>
     
       </div>
   
  }
     useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((state)=>({ ...state, mobileview: true }))
          : setState((state)=>({ ...state, mobileview: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
    return (
        <div>
         <HideOnScroll>
         <AppBar position="fixed" className={transpt}> {mobileview? displaymobile() :displaydesktop() } </AppBar> 
         </HideOnScroll>
          
        
                
        </div>
    )
}

export default Navbar;
