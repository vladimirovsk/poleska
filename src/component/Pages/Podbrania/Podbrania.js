import React from "react";
import {Container} from 'react-bootstrap';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const imageArrow = process.env.PUBLIC_URL+"/pages/apartamenty/arrow.png";
const prospectDocument = process.env.PUBLIC_URL+ '/pages/podbrania/PROSPEKT_INFORMACYJNY.pdf'
const standartDocument = process.env.PUBLIC_URL+ '/pages/podbrania/STANDARD_WYKONCZENIA.pdf';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		textAlign: "center",
		padding: '0.5em 1em 0.5em 1em',
		fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightRegular,
	}
}));

function Podbrania() {

	const classes = useStyles();
	const masPobraniya = [
		{id: 1, title: "PROSPEKT INFORMACYJNY ", title2: "POBIERZ", rows: null, column: null, url:prospectDocument},
		{id: 2, title: "STANDARD WYKONANIA", title2: "POBIERZ", rows: null, column:null, url:standartDocument},
	]

	const openNewWindow = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}


	return (
		<Container>
			<div className='titlePage'>
				DO POBRANIA
			</div>
			<Container>
				{
					masPobraniya.map((panel, id) => (
						<Accordion key={id} className={'accordion-apartment'} square expanded={true}>
							<AccordionSummary
								// expandIcon={<ExpandMoreIcon style={{fontSize: '2em', color: '#75a55b'}} />}
								aria-controls={"panel-content" + id}
								id={"panel-header" + id}
								key={"AccordionSummary" + id}
							>
								<div key={"div" + id} className={'petro-name'}>
									<Typography key={"Typography" + id} className={classes.heading}>{panel.title}</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<Container>

									<div className={"accordion-footer-apartment"}>
										<div className={"square-apartment"} onClick={()=>openNewWindow(panel.url)}>
											<Typography>
												{panel.title2}
												<img style={{paddingLeft: '1em'}} src={imageArrow} alt={"imageArrow"}/>
											</Typography>
										</div>
									</div>
								</Container>
							</AccordionDetails>
						</Accordion>
					))}
			</Container>

		</Container>
	)
}

export default Podbrania