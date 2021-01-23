import React from "react"

import { AppBar, Toolbar, Typography, makeStyles, Switch } from "@material-ui/core"

const useStyles = makeStyles({
	appBarHeader: {
		fontFamily: "Monoton",
		margin: "0 auto"
	}
})

export default function Header({ dark, changeTheme }) {
	const classes = useStyles()
	return (
		<AppBar color="default" position="sticky">
			<Toolbar>
				<Typography className={classes.appBarHeader} variant="h5">
					HI
				</Typography>
				<Switch checked={dark} onChange={changeTheme} inputProps={{ "aria-label": "Change Theme" }} />
			</Toolbar>
		</AppBar>
	)
}
