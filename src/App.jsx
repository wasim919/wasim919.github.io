import React, { useState } from "react"

import { Paper, Container } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

import Header from "./components/Header"
import MyBio from "./components/MyBio"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import FomalInfo from "./components/Formal Info"
import FormalInfo from "./components/Formal Info"

export default function App() {
	const [dark, setDark] = useState(localStorage.getItem("mysitetheme") ? JSON.parse(localStorage.getItem("mysitetheme")) : false)

	const customTheme = React.useMemo(() => {
		return createMuiTheme({
			typography: {
				fontFamily: "Oswald, sans-serif"
			},
			palette: {
				type: dark ? "dark" : "light"
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
					<Projects />
					<Experience />
					<FormalInfo />
				</Container>
			</Paper>
		</ThemeProvider>
	)
}
