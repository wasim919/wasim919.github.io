import React, { useState } from "react"

import { Paper, Container } from "@material-ui/core"
import { ThemeProvider, createMuiTheme, BottomNavigation, BottomNavigationAction } from "@material-ui/core"

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

	return (
		<ThemeProvider theme={customTheme}>
			<Paper style={{ display: "flex", flexDirection: "column" }} elevation={0} square={true}>
				<Header dark={dark} changeTheme={changeTheme} />
				<Container>
					<MyBio />
					<Projects dark={dark} />
					<Experience dark={dark} />
					<FormalInfo dark={dark} />
					<Connect dark={dark} />
				</Container>
				<Footer />
			</Paper>
		</ThemeProvider>
	)
}
