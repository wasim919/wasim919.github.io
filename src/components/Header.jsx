import React, { useState } from "react"

import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Switch,
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	useTheme,
	ListItemText
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import WorkOutlineIcon from "@material-ui/icons/WorkOutline"
import InfoIcon from "@material-ui/icons/Info"
import StorageIcon from "@material-ui/icons/Storage"
import ContactsIcon from "@material-ui/icons/Contacts"

import clsx from "clsx"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	appBarHeader: {
		fontFamily: "Monoton",
		margin: "0 auto"
	},
	root: {
		// display: "flex"
	},
	appBar: {
		backgroundColor: theme.palette.type === "light" ? "#90caf9" : "dark",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}))

export default function Header({ dark, changeTheme }) {
	const [open, setOpen] = useState(false)
	const theme = useTheme()
	const classes = useStyles()

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<>
			<AppBar
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
				color="default"
				position="sticky"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.appBarHeader} variant="h5">
						HI
					</Typography>
					<Switch checked={dark} onChange={changeTheme} inputProps={{ "aria-label": "Change Theme" }} />
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				{/* <List style={{ display: "flex" }}>
					<ListItemIcon>
						<Switch checked={dark} onChange={changeTheme} inputProps={{ "aria-label": "Change Theme" }} />
					</ListItemIcon>
					<ListItemText primary={"Toggle Theme"} />
				</List>
				<Divider /> */}
				<List>
					<ListItem button>
						<ListItemIcon>
							<StorageIcon />
						</ListItemIcon>
						<ListItemText primary={"Projects"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<WorkOutlineIcon />
						</ListItemIcon>
						<ListItemText primary={"Experience"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={"Formal Info"} />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<ContactsIcon />
						</ListItemIcon>
						<ListItemText primary={"Connect"} />
					</ListItem>
				</List>
			</Drawer>
		</>
	)
}
