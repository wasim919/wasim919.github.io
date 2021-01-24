import React from "react"

import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	copyRightStyle: {
		textAlign: "center",
		padding: "1.5rem",
		backgroundColor: "#212121",
		color: "white"
	}
})

export default function Footer() {
	const classes = useStyles()
	return (
		<div style={{ marginTop: "2rem" }}>
			<Typography className={classes.copyRightStyle} variant="body2">
				COPYRIGHT &copy;2021 Wasim Ishaq Khan
			</Typography>
		</div>
	)
}
