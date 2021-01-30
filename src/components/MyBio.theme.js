import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	gridStyle: {
		// [theme.breakpoints.up("md")]: {
		height: "100vh"
		// }
	},
	innerGridStyle: {
		// marginTop: "2rem"
	},
	myName: {
		fontFamily: "Open Sans"
	},
	bioStyle: {
		marginTop: "1rem"
	},
	// myPhotoStyle: {
	// 	width: 0,
	// 	height: 0
	// },
	[theme.breakpoints.down("md")]: {
		myPhotoStyle: {
			width: "256px",
			height: "256px"
		}
	},
	[theme.breakpoints.up("md")]: {
		myPhotoStyle: {
			width: "256px",
			height: "256px"
		}
	}
}))
