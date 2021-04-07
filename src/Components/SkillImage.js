/* eslint-disable react/prop-types */
import React from "react";
import { withWidth, isWidthDown,makeStyles } from "@material-ui/core";
import { Zoom } from "react-reveal";

const useStyles =makeStyles(theme=>({
    root:{
       "&:hover":{
		transition: "all .4s ease-in-out",
		transform:"scale(1.2)"
	   }
    },

}))
function SkillImage({ name, src, width }) {
	let size = 100;
    const  {root}=useStyles();
	if (isWidthDown("xs", width)) {
		size = 60;
		console.log(width);
	}
     let path =require(`../Icons/${src}`)
	return (
		<Zoom>
			<img
			   
				src={path.default}
				width={size}
				height={size}
				alt={`${name} logo`}
			/>{" "}
			<br />
			
		</Zoom>
	);
}

export default withWidth()(SkillImage);