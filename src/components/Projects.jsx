import React from "react"

import { Grid } from "@material-ui/core"

import ProjectCardComponent from "../components/ProjectCardComponent"

import { projects } from "../content"

export default function Projects() {
	return (
		<Grid container spacing={5}>
			{(projects || []).map((ele, index) => (
				<Grid item sm={12} md={6} key={index}>
					<ProjectCardComponent {...ele} />
				</Grid>
			))}
		</Grid>
	)
}
