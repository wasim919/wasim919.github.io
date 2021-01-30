import React from "react"

import { IconButton, Typography, makeStyles } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles((theme) => ({
	titleStyle: {
		fontFamily: "Open Sans",
		marginBottom: "2rem",
		display: "block"
	},
	iconStyle: {
		fontSize: "2.5rem"
	}
}))

export default function Connect({ id }) {
	const classes = useStyles()
	return (
		<div style={{ marginTop: "5rem" }}>
			<Typography className={classes.titleStyle} variant="h4">
				Connect
			</Typography>
			<div id={id} style={{ display: "flex", justifyContent: "center" }}>
				<IconButton href="https://instagram.com/wasim_ikhan/" target="_blank">
					<InstagramIcon className={classes.iconStyle} style={{ color: "e4405f" }} />
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/wasim-ishaq-khan-47a4a4144/" target="_blank">
					<LinkedInIcon className={classes.iconStyle} style={{ color: "0077B5" }} />
				</IconButton>
				<IconButton href="https://github.com/wasim919" target="_blank">
					<GitHubIcon className={classes.iconStyle} />
				</IconButton>
				<IconButton href="https://www.facebook.com/wasimishaq.khan" target="_blank">
					<FacebookIcon className={classes.iconStyle} style={{ color: "3b5999" }} />
				</IconButton>
			</div>
		</div>
	)
}
