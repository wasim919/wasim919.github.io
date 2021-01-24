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
	ListItemText
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SchoolIcon from "@material-ui/icons/School"
import CodeIcon from "@material-ui/icons/Code"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"

import { formalInfo } from "../content"

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		marginTop: "3rem"
	},
	titleStyle: {
		fontFamily: "Monoton",
		marginBottom: "2rem"
	},
	tabs: {
		backgroundColor: theme.palette.type === "dark" ? "dark" : "#90caf9"
	},
	tab: {
		color: theme.palette.type === "dark" ? "white" : "rgba(0, 0, 0, 0.87)"
	},
	accordionTitle: {
		display: "flex",
		gap: "1rem"
	},
	accordionDetailsStyle: {
		backgroundColor: theme.palette.type === "dark" ? "dark" : "#f0f0f0"
	}
}))

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div role="tabpanel" id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <Typography>{children}</Typography>}
		</div>
	)
}

export default function FormalInfo() {
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
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
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
											<TableCell>{formalInfo[0][0].title}</TableCell>
											<TableCell>{formalInfo[0][0].college}</TableCell>
											<TableCell>{formalInfo[0][0].year}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>{formalInfo[0][1].title}</TableCell>
											<TableCell>{formalInfo[0][1].college}</TableCell>
											<TableCell>{formalInfo[0][1].year}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2bh-header">
							<Typography className={classes.accordionTitle} variant="body2">
								<CodeIcon />
								Skills
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetailsStyle}>
							<Grid container spacing={5}>
								<Grid item sm={4}>
									<span></span>
									<List>
										{(formalInfo[1][0] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>{ele}</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
								<Grid item sm={4}>
									<List>
										{(formalInfo[1][1] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>{ele}</ListItemText>
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
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2bh-header">
							<Typography className={classes.accordionTitle} variant="body2">
								<LibraryBooksIcon />
								Coursework
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetailsStyle}>
							<Grid container spacing={5}>
								<Grid item sm={4}>
									<span></span>
									<List>
										{(formalInfo[2][0] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>{ele}</ListItemText>
												</ListItem>
												<Divider />
											</>
										))}
									</List>
								</Grid>
								<Grid item sm={4}>
									<List>
										{(formalInfo[2][1] || []).map((ele, index) => (
											<>
												<ListItem key={index}>
													<ListItemText>{ele}</ListItemText>
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
			<Grid container></Grid>
		</Grid>
	)
}
