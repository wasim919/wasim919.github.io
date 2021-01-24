import React from "react"

import { Card, CardHeader, CardContent, Typography, Divider, CardActions, IconButton, makeStyles } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.type === "dark" ? "light" : "#cfd8dc"
	}
}))

export default function ProjectCardComponent({ title, subHeading, description, link }) {
	const classes = useStyles()
	return (
		<Card>
			<CardHeader className={classes.header} title={title} subheader={subHeading} />
			<CardContent>
				<Typography variant="body1">{(description || []).join("\n")}</Typography>
			</CardContent>
			<Divider />
			<CardActions>
				<IconButton aria-label="Github link" target="_blank" href={link}>
					<GitHubIcon />
				</IconButton>
			</CardActions>
		</Card>
	)
}
