import React from "react"

import { AppBar, Toolbar, Typography, makeStyles, Switch } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	appBarHeader: {
		fontFamily: "Monoton",
		margin: "0 auto"
	},
	appBar: {
		backgroundColor: theme.palette.type === "light" ? "#90caf9" : "dark"
	}
}))

export default function Header({ dark, changeTheme }) {
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar} color="default" position="sticky">
			<Toolbar>
				<Typography className={classes.appBarHeader} variant="h5">
					HI
				</Typography>
				<Switch checked={dark} onChange={changeTheme} inputProps={{ "aria-label": "Change Theme" }} />
			</Toolbar>
		</AppBar>
	)
}
