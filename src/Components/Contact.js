import React from "react";
import "./Contact.css";
import { Grid,Box ,makeStyles} from "@material-ui/core"
import github_icon from '../Icons/github.svg'
import gmail_icon from '../Icons/gmail.svg'
import linkedin_icon from '../Icons/linkedin.svg'
import insta_icon from '../Icons/insta.svg'
import Fade from 'react-reveal/Fade';

function Contact() {
	return (
		<div className="section-style" id="contact">
		
      <Box ml={5} mr={5} mt={5}>
      <Grid container xs={12}>
        <Grid xs={12}>
        <div className="contact">
		<Fade left duration={1000} distance="120px">
               <h1 className="contact_heading">		        	
               Contact👋			     
			   </h1>
        </Fade> 
          </div>
        </Grid>
		<Grid item xs={12} sm={6} className="contact-desc">
          
		<Fade left duration={1000} distance="120px">
					<p className="contact-text">
						Thanks for visiting my portfolio! If you liked it, you
						can star it on Github if you want. The repo can be found{" "}
						<a
							style={{ textDecoration: "none" }}
							
							href="https://github.com/Sarthakbh321/Interactive-Resume"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p>
	     </Fade>				
			</Grid>
			<Grid item xs={12} sm={6}>
			<Fade right duration={1000} distance="120px">
					<div className="contact-section">
						<p className="img-text">
							<a
								href="https://github.com/HimanshuBarak"
								className="b_color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@HimanshuBarak
							</a>
							<img
								src={github_icon}
								width={40}
								height={40}
								alt="github icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="mailto:himanshubarak12@gmail.com"
								className="b_color"
							>
								himanshubarak12@gmail.com
							</a>{" "}
							<img
								src={gmail_icon}
								width={40}
								height={40}
								alt="gmail icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="https://www.linkedin.com/in/himanshu-barak-002714118"
								className="b_color"
								target="_blank"
								rel="noopener noreferrer"
							>
								Himanshu Barak
							</a>{" "}
							<img
								src={linkedin_icon}
								width={40}
								height={40}
								alt="linkedin icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="https://www.instagram.com/__himanshu_0_0/"
								className="b_color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@__himanshu_0_0
							</a>{" "}
							<img
								src={insta_icon}
								width={40}
								height={40}
								alt="instagram icon"
							/>
						</p>
					</div>
					</Fade>
			</Grid>
			<Grid xs={12} className="footer">
                   <p>Made with 💙 by Himanshu Barak </p>
			</Grid>
		</Grid>
      </Box>
			
		</div>
	);
}

export default Contact;

