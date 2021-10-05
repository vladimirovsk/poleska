import React from "react";
import {Container} from 'react-bootstrap';
import {columns, rowsGaraze} from "./dataGrid";
import {columnsKomorka, rowsKomorka} from "./dataKomorka";

import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import imageArrow from "../Apartamenty/arrow.png";
import {makeStyles} from '@material-ui/core/styles';
import TablePoleska from "../../Table/TablePoleska";

import mejstoGaraz from './garaz.pdf'

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

export default function Garaze() {
    const classes = useStyles();
    const masPetro = [
        {
            id: 1,
            title: "MIEJSCE GARAŻOWE",
            title2: "MIEJSCE GARAŻOWE",
            rows: rowsGaraze,
            column: columns,
            url: mejstoGaraz
        },
        {
            id: 2,
            title: "KOMÓRKA LOKATORSKA",
            title2: "KOMÓRKA LOKATORSKA",
            rows: rowsKomorka,
            column: columnsKomorka,
            url: mejstoGaraz
        },
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
        <Container>
            <div className='titlePage'>
                GARAŻE I KOMÓRKI LOKATORSKIE
            </div>
            <div style={{marginBottom: '2em'}} className={"local-text-bottom text-center"}>
                <div className={'local-text-bottom-row'}>Wybierz miejsce garażowe i komórkę lokatorską:</div>
            </div>
            <Container style={{margin: 0, padding: 0}}>
                {
                    masPetro.map((panel, id) => (
                        <Accordion key={id} className={'accordion-apartment'} square expanded={expanded === panel.title}
                                   onChange={handleChange(panel.title)} style={{margin: 0, padding: 0}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{fontSize: '1em', color: '#75a55b'}}/>}
                                aria-controls={"panel-content" + id}
                                id={"panel-header" + id}
                                key={"AccordionSummary" + id}
                            >
                                <div key={"div" + id} className={'petro-name'}>
                                    <Typography key={"Typography" + id}
                                                className={classes.heading}>{panel.title}</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Container>
                                    <TablePoleska key={"TablePoleskaGaraze"} columns={panel.column} panel={panel}/>
                                    <div className={"accordion-footer-apartment"}>
                                        <div className={"square-apartment"} onClick={() => openNewWindow(panel.url)}>
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
            </Container>

        </Container>
    )
}

