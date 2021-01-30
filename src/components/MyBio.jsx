import React from "react"

import { Grid, Typography, Avatar } from "@material-ui/core"

import Typewriter from "typewriter-effect"

import { useStyles } from "./MyBio.theme"
import { bio } from "../content"

export default function MyBio({ id }) {
	const classes = useStyles()
	return (
		<Grid className={classes.gridStyle} container>
			<Grid
				container
				style={window.screen.width < 600 ? { flexDirection: "column-reverse" } : { flexDirection: "row" }}
				spacing={5}
				alignItems="center"
				justify="center"
				className={classes.innerGridStyle}
			>
				<Grid item sm={12} md={6}>
					<Typography id={id} className={classes.myName} variant="h5">
						Hi, my name is Wasim Ishaq
					</Typography>
					<Typography style={{ display: "flex" }} id={id} className={classes.myName} variant="h5">
						I design and develop&nbsp;
					</Typography>
					<Typography style={{ display: "flex" }} id={id} className={classes.myName} variant="h5">
						<Typewriter
							options={{
								loop: true
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString("webapps")
									.pauseFor(1000)
									.deleteAll()
									.typeString("mobileapps")
									.pauseFor(1000)
									.deleteAll()
									.typeString("ui/ux")
									.pauseFor(1000)
									.deleteAll()
									.typeString("things")
									.pauseFor(1000)
									.deleteAll()
									.start()
							}}
						/>
					</Typography>
					{/* <Typography className={classes.myName}>Developer | Data Analyst | Photographer</Typography> */}
					{/* {(bio || []).map((ele, index) => (
						<Typography key={index} variant="h6" className={classes.bioStyle}>
							{ele}
						</Typography>
					))} */}
				</Grid>
				<Grid item sm={12} md={6}>
					<Avatar className={classes.myPhotoStyle} alt="My Photo" src="./images/Wasim.jpeg"></Avatar>
				</Grid>
			</Grid>
		</Grid>
	)
}
