import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from '@material-ui/core/styles';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { Document, Page, pdfjs } from 'react-pdf';

import {Dialog, Button, DialogActions,DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

import './tablePoleska.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		textAlign: "center",
		fontSize: theme.typography.pxToRem(14),
		fontWeight: theme.typography.fontWeightRegular,
	},
	container:{
		paddingLeft: 0,
		paddingRight: 0,
		marginLeft: 0,
		marginRight: 0,
		fontSize: theme.typography.pxToRem(14)
	},
	tableRow:{
		fontSize: theme.typography.pxToRem(14)
	},
	tableHeader:{
		backgroundColor: '#75a55b',
		fontSize: theme.typography.pxToRem(14)

	},
	buttonGreen:{
		backgroundColor: "green"
	}
}));

export default function TablePoleska(props){
	const {columns, panel} = props;
	const [openDialog, setOpenDialog] = React.useState(false);
	const classes = useStyles();


	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
		pdfjs.version
	}/pdf.worker.js`;
	const [dialogTitle, setDialogTitle] = React.useState('');
	const [imgPdf, setImgPdf] = React.useState('');
	// const [pageNumber, setPageNumber] = React.useState(1);
	const [numPages, setNumPages] = React.useState(null);

	const handleCloseDialog = () =>{
		setOpenDialog(false);
	}

	const handleClickOpen = (row, panel) =>{
		console.log(openDialog, row, panel)
		setDialogTitle(panel.title)
		setImgPdf(row.cardDetail)
		setOpenDialog(true);
		console.log(imgPdf)
	}

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}


	const DialogCard = () =>{
		return(
			<Dialog style={{padding:'0', margin:'auto'}}
				fullWidth={true} maxWidth={'lg'}
				open={openDialog}
				onClose={handleCloseDialog}
				aria-labelledby="max-width-dialog-title">
				<DialogTitle id="max-width-dialog-title">{dialogTitle}</DialogTitle>
				<DialogContent style={{padding:'0', margin:'auto'}}>
					<DialogContentText>
						<a href={imgPdf}>
							<Document file={imgPdf}
							          style={{margin:'auto'}}
							          onLoadSuccess={onDocumentLoadSuccess}
							>
								<Page
									pageNumber={numPages}
									style={{margin:'auto'}}/>
							</Document>
						</a>

					{/*	You can set my maximum width and whether to adapt or not.*/}
					</DialogContentText>
					{/*<form className={classes.form} noValidate>*/}


					{/*	<FormControl className={classes.formControl}>*/}

					{/*	</FormControl>*/}
					{/*</form>*/}
				</DialogContent>
				<DialogActions className={"text-center"}>
					<dib style={{margin:'auto'}}>
					<Button className={classes.buttonGreen} onClick={handleCloseDialog} color="primary" variant="contained">
						Close
					</Button>
					</dib>
				</DialogActions>
			</Dialog>
		)
	}

	return(
		<div>
		<TableContainer key={"TableContainer"+panel.id} className={classes.container} style={{padding: 0, margin: 0}}>
			<Table  key={"Table"+panel.id} stickyHeader aria-label="sticky table">
				<TableHead key={"TableHead"+panel.id} className={classes.tableHeader} style={{margin: 0, padding: 0}}>
					<TableRow key={"TableRowHeader"+panel.id} style={{margin: 0, padding: 0}}>
						{columns.map((column) => (
							<TableCell className={classes.tableHeader}
							           key={"TableCell"+column.id}
							           align={column.align}
							           style={{minWidth: column.minWidth}}
							>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody key={"TableBody"+panel.id} style={{margin: 0, padding: 0}}>
					{panel.rows.map((row) => {
						return (
							<TableRow hover role="checkbox" tabIndex={-1} key={row.id} style={{margin: 0, padding: 0}}
							          onClick={(event)=>handleClickOpen(row, panel)}>
								{columns.map((column) => {
									const value = row[column.id];
									return (
										<TableCell key={column.id} align={column.align} className={classes.tableRow}>
											{value}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
			<DialogCard />
		</div>
	)

}