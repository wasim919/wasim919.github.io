import React from "react"

import { Grid, makeStyles, Typography } from "@material-ui/core"

import ProjectCardComponent from "../components/ProjectCardComponent"

import { projects } from "../content"

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		[theme.breakpoints.up("md")]: {
			marginTop: "3rem"
		}
	},
	titleStyle: {
		fontFamily: "Monoton",
		marginBottom: "2rem"
	}
}))

export default function Projects() {
	const classes = useStyles()
	return (
		<Grid className={classes.mainContainer} container>
			<Typography className={classes.titleStyle} variant="h4">
				Projects
			</Typography>
			<Grid container spacing={5}>
				{(projects || []).map((ele, index) => (
					<Grid item sm={12} md={6} key={index}>
						<ProjectCardComponent {...ele} />
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}
