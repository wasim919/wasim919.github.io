import React from "react"

import {
	Grid,
	makeStyles,
	Typography,
	List,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Table,
	TableContainer,
	TableBody,
	TableRow,
	TableCell,
	Divider,
	ListItem,
	ListItemText,
	Button
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SchoolIcon from "@material-ui/icons/School"
import CodeIcon from "@material-ui/icons/Code"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import SaveIcon from "@material-ui/icons/Save"

import { formalInfo } from "../content"

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		marginTop: "5rem"
	},
	titleStyle: {
		fontFamily: "Open Sans",
		marginBottom: "2rem"
	},
	tabs: {
		backgroundColor: theme.palette.type === "dark" ? "dark" : "#90caf9"
	},
	tab: {
		color: theme.palette.type === "dark" ? "white" : "rgba(0, 0, 0, 0.87)"
	},
	accordionSummary: {
		backgroundColor: theme.palette.type === "light" ? "white" : "dark"
	},
	accordionTitle: {
		display: "flex",
		gap: "1rem",
		fontWeight: theme.palette.type === "dark" ? 400 : 700
	},
	accordionDetailsStyle: {
		backgroundColor: theme.palette.type === "dark" ? "dark" : "#f0f0f0"
	},
	verticalLineStyle: {
		[theme.breakpoints.up("md")]: {
			marginLeft: "3rem"
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: "0.5rem"
		},
		height: "90%",
		width: "5px",
		backgroundColor: "#00c853",
		marginTop: "1rem"
	},
	boldFont: {
		fontWeight: theme.palette.type === "dark" ? 400 : 700
	}
}))

export default function FormalInfo({ id }) {
	const [expanded, setExpanded] = React.useState("panel2")

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	const classes = useStyles()
	return (
		<Grid className={classes.mainContainer} container>
			<Typography className={classes.titleStyle} variant="h4">
				Formal Info
			</Typography>
			<Grid container>
				<Grid item sm={12}>
					<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
						<AccordionSummary
							className={classes.accordionSummary}
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography className={classes.accordionTitle} variant="body1">
								<SchoolIcon />
								Education
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetailsStyle}>
							<TableContainer>
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className={classes.boldFont}>{formalInfo[0][0].title}</TableCell>
											<TableCell className={classes.boldFont}>{formalInfo[0][0].college}</TableCell>
											<TableCell className={classes.boldFont}>{formalInfo[0][0].year}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className={classes.boldFont}>{formalInfo[0][1].title}</TableCell>
											<TableCell className={classes.boldFont}>{formalInfo[0][1].college}</TableCell>
											<TableCell className={classes.boldFont}>{formalInfo[0][1].year}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
						<AccordionSummary
							className={classes.accordionSummary}
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2bh-header"
						>
							<Typography id={id} className={classes.accordionTitle} variant="body2">
								<CodeIcon />
								Skills
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetailsStyle}>
							<Grid container spacing={5}>
								<Grid item xs={1}>
									<div className={classes.verticalLineStyle}></div>
								</Grid>
								<Grid item xs={10} md={5}>
									<List>
										{(formalInfo[1][0] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>
														<Typography className={classes.boldFont} variant="body1">
															{ele}
														</Typography>
													</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
								<Grid item xs={1}>
									<div className={classes.verticalLineStyle} style={{ backgroundColor: "#0091ea" }}></div>
								</Grid>
								<Grid item xs={10} md={5}>
									<List>
										{(formalInfo[1][1] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>
														<Typography className={classes.boldFont} variant="body1">
															{ele}
														</Typography>
													</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
						<AccordionSummary
							className={classes.accordionSummary}
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2bh-header"
						>
							<Typography className={classes.accordionTitle} variant="body2">
								<LibraryBooksIcon />
								Coursework
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetailsStyle}>
							<Grid container spacing={5}>
								<Grid item xs={1}>
									<div className={classes.verticalLineStyle} style={{ backgroundColor: "#c62828" }}></div>
								</Grid>
								<Grid item xs={10} md={5}>
									<List>
										{(formalInfo[2][0] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>
														<Typography className={classes.boldFont} variant="body1">
															{ele}
														</Typography>
													</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
								<Grid item xs={1}>
									<div className={classes.verticalLineStyle} style={{ backgroundColor: "#6a1b9a" }}></div>
								</Grid>
								<Grid item xs={10} md={5}>
									<List>
										{(formalInfo[2][1] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>
														<Typography className={classes.boldFont} variant="body1">
															{ele}
														</Typography>
													</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			<div style={{ margin: "2rem auto" }}>
				<Button
					download="wasim_resume.pdf"
					href="./wasim_resume.pdf"
					target="_blank"
					variant="contained"
					color="primary"
					startIcon={<SaveIcon />}
				>
					Resume
				</Button>
			</div>
		</Grid>
	)
}
