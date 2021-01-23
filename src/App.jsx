import React, { useState } from "react"

import { Paper, Container } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

import Header from "./components/Header"
import MyBio from "./components/MyBio"

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
			<Paper elevation={0} square={true}>
				<Header dark={dark} changeTheme={changeTheme} />
				<Container>
					<MyBio />
				</Container>
			</Paper>
		</ThemeProvider>
	)
}
