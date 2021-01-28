import React from "react"

import { Grid, Typography, Avatar } from "@material-ui/core"

import { useStyles } from "./MyBio.theme"
import { bio } from "../content"

export default function MyBio({ id }) {
	const classes = useStyles()
	return (
		<Grid className={classes.gridStyle} container>
			<Grid container spacing={5} className={classes.innerGridStyle}>
				<Grid item sm={12} md={6}>
					<Typography id={id} className={classes.myName} variant="h5">
						Wasim Ishaq Khan
					</Typography>
					<Typography className={classes.myName}>Developer | Data Analyst | Photographer</Typography>
					{(bio || []).map((ele, index) => (
						<Typography key={index} variant="h6" className={classes.bioStyle}>
							{ele}
						</Typography>
					))}
				</Grid>
				<Grid item sm={12} md={6}>
					<Avatar className={classes.myPhotoStyle} alt="My Photo" src="./images/Wasim.jpeg"></Avatar>
				</Grid>
			</Grid>
		</Grid>
	)
}
