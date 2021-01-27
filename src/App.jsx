import React, { useState } from "react"

import { Paper, Container } from "@material-ui/core"
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"

import Header from "./components/Header"
import MyBio from "./components/MyBio"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import FormalInfo from "./components/Formal Info"
import Connect from "./components/Connect"
import Footer from "./components/Footer"

export default function App() {
	const [dark, setDark] = useState(localStorage.getItem("mysitetheme") ? JSON.parse(localStorage.getItem("mysitetheme")) : false)

	const customTheme = React.useMemo(() => {
		return createMuiTheme({
			typography: {
				fontFamily: "Oswald, sans-serif"
			},
			palette: {
				type: dark ? "dark" : "light",
				background: {
					paper: dark ? "#424242" : "#f0f0f0"
				}
			}
		})
	}, [dark])

	const changeTheme = () => {
		setDark(!dark)
		localStorage.setItem("mysitetheme", JSON.stringify(!dark))
	}

	const useStyles = makeStyles((theme) => ({
		root: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2)
		}
	}))

	function ScrollTop(props) {
		const { children, window } = props
		const classes = useStyles()
		// Note that you normally won't need to set the window ref as useScrollTrigger
		// will default to window.
		// This is only being set here because the demo is in an iframe.
		const trigger = useScrollTrigger({
			target: window ? window() : undefined,
			disableHysteresis: true,
			threshold: 100
		})

		const handleClick = (event) => {
			const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor")

			if (anchor) {
				anchor.scrollIntoView({ behavior: "smooth", block: "center" })
			}
		}

		return (
			<Zoom in={trigger}>
				<div onClick={handleClick} role="presentation" className={classes.root}>
					{children}
				</div>
			</Zoom>
		)
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Paper style={{ display: "flex", flexDirection: "column" }} elevation={0} square={true}>
				<Header dark={dark} changeTheme={changeTheme} />
				<Container>
					<MyBio id="back-to-top-anchor" />
					<Projects dark={dark} />
					<Experience dark={dark} />
					<FormalInfo dark={dark} />
					<Connect dark={dark} />
					<ScrollTop>
						<Fab color="secondary" size="small" aria-label="scroll back to top">
							<KeyboardArrowUpIcon />
						</Fab>
					</ScrollTop>
				</Container>
				<Footer />
			</Paper>
		</ThemeProvider>
	)
}
