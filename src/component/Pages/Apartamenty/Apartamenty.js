import React from "react";
import {Col, Container, Row} from 'react-bootstrap';

import {Accordion, AccordionSummary, Typography, AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TablePoleska from "../../Table/TablePoleska";

import {makeStyles} from '@material-ui/core/styles';

import {columns, rowsParter, rowsPietro1, rowsPietro2, rowsPietro3} from './dataGrid';
import './Apartamenty.css';

const imageLogo =  process.env.PUBLIC_URL + '/component/header/logo.png';
const pathCard = '/pages/apartamenty/cardDetail/';

const parterPdf = process.env.PUBLIC_URL+pathCard+'parter.pdf';
const pietro1Pdf = process.env.PUBLIC_URL+pathCard+'1_pietro.pdf';
const pietro2Pdf = process.env.PUBLIC_URL+pathCard+'2_pietro.pdf';
const pietro3Pdf = process.env.PUBLIC_URL+pathCard+'3_pietro.pdf';

const imageArrow = process.env.PUBLIC_URL+ '/pages/apartamenty/arrow.png';


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

export default function Apartamenty() {
	const classes = useStyles();

	const masPetro = [
		{id: 1, title: "PARTER", title2: "PARTERU", rows: rowsParter, pdf:parterPdf},
		{id: 2, title: "PIĘTRO 1", title2: "1 PIĘTRA", rows: rowsPietro1, pdf:pietro1Pdf},
		{id: 3, title: "PIĘTRO 2", title2: "2 PIĘTRA", rows: rowsPietro2, pdf:pietro2Pdf},
		{id: 4, title: "PIĘTRO 3", title2: "3 PIĘTRA", rows: rowsPietro3, pdf:pietro3Pdf}
	]

	const [expanded, setExpanded] = React.useState(masPetro[0].title);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const openNewWindow = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<Container >
			<div className='titlePage'>
				APARTAMENTY
			</div>
			<Row className={"local-text-bottom text-center p-0 mb-3"}>
				<Col className={"local-text-bottom-row "}>
					<img src={imageLogo} alt={'Poleska 5'} style={{height:'1em'}}/> to 27 mieszkań o zróżnicowanym metrażu.
				</Col>
				<Col className={"local-text-bottom-row"}>
					Zapraszamy do zapoznania się z naszą ofertą:
				</Col>
			</Row>
			<Row>
				<Col className={'m-0 p-0'}>
					{
						masPetro.map((panel, id) => (
						<Accordion key={id} className={'accordion-apartment m-0 p-0'} square expanded={expanded === panel.title}
						           onChange={handleChange(panel.title)}  >
							<AccordionSummary IconButtonProps={<ExpandMoreIcon/>}
							expandIcon={<ExpandMoreIcon style={{fontSize: '1em', color: '#75a55b'}}/>}
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
							<TablePoleska key={"TablePoleska1"} columns={columns} panel={panel}/>
							<div className={"accordion-footer-apartment"}>
								<div className={"square-apartment"} onClick={()=>openNewWindow(panel.pdf)}>
									<Typography>
										ZOBACZ ZRZUT {panel.title2}
										<img style={{paddingLeft: '1em'}} src={imageArrow} alt={"imageArrow"}/>
									</Typography>
								</div>
							</div>

						</Container>
						</AccordionDetails>
						</Accordion>
						))}
				</Col>
			</Row>
		</Container>
	)
}