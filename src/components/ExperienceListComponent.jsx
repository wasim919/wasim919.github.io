import React from "react"

import { ListItem, ListItemText, Typography, Divider } from "@material-ui/core"

export default function ExperienceListComponent({ experience }) {
	return (
		<>
			{(experience || []).map((ele, index) => (
				<>
					<ListItem key={index}>
						<ListItemText
							primary={<Typography variant="h6">{ele.title}</Typography>}
							secondary={
								<React.Fragment>
									<Typography style={{ marginTop: "1rem" }} component="span" variant="body1" color="textPrimary">
										{ele.subHeading}
									</Typography>
									<Typography style={{ marginTop: "1rem" }} variant="h6" color="textPrimary" component="p">
										{ele.description}
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider />
				</>
			))}
		</>
	)
}
