import React from "react";

const greenPdf = process.env.PUBLIC_URL+'/pages/apartamenty/green_pdf.svg';
const pathCard = '/pages/garaze/';

const B31G4 = process.env.PUBLIC_URL+pathCard+'KomorkaconstDetail/B3.-1.4.pdf';
const B31G5 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.5.pdf';
const B31G6 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.6.pdf';
const B31G7 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.7.pdf';
const B31G8 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.8.pdf';
const B31G9 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.9.pdf';
const B31G10 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.10.pdf';
const B31G11 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.11.pdf';

const B31G13 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.13.pdf';
const B31G14 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.14.pdf';
const B31G15 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.15.pdf';
const B31G16 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.16.pdf';
const B31G17 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.17.pdf';
const B31G18 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.18.pdf';
const B31G19 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.19.pdf';
const B31G20 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.20.pdf';
const B31G21 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.21.pdf';
const B31G22 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.22.pdf';
const B31G23 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.23.pdf';
const B31G24 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.24.pdf';
const B31G25 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.25.pdf';
const B31G26 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.26.pdf';
const B31G27 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.27.pdf';
const B31G28 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.28.pdf';
const B31G29 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.29.pdf';
const B31G30 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.30.pdf';
const B31G31 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.31.pdf';
const B31G32 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.32.pdf';
const B31G33 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.33.pdf';
const B31G34 = process.env.PUBLIC_URL+pathCard+'KomorkaDetail/B3.-1.34.pdf';

function createData(id, number, metraz, cena, karta, status, cardDetail) {
	return {id, number, metraz, cena, karta, status, cardDetail};
}

const B31 = [ null, null, null, null,
	B31G4, B31G5, B31G6, B31G7, B31G8, B31G9, B31G10, B31G11, null,
	B31G13, B31G14, B31G15, B31G16, B31G17, B31G18, B31G19, B31G20,
	B31G21, B31G22, B31G23, B31G24, B31G25, B31G26, B31G27,
	B31G28, B31G29, B31G30, B31G31, B31G32, B31G33, B31G34,
]

export const columnsKomorka = [
	{id: 'number', label: 'Numer'},
	{id: 'metraz', label: 'metraz m2', align: 'right'},
	{id: 'cena', label: 'cena m2', align: 'right'},
	{id: 'karta', label: 'Karty miejsc garażowych', align: 'center'},
	{id: 'status', label: 'Status'},
]

export const rowsKomorka = [
	createData(1, 'B3-1.4', 2.33, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[4]),
	createData(1, 'B3-1.5', 2.21, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B31[5]),
	createData(1, 'B3-1.6', 2.51, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[6]),
	createData(1, 'B3-1.7', 2.51, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[7]),
	createData(1, 'B3-1.8', 1.46, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[8]),
	createData(1, 'B3-1.9', 1.39, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[9]),
	createData(1, 'B3-1.10', 1.57, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B31[10]),
	createData(1, 'B3-1.11', 1.57, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B31[11]),
	createData(1, 'B3-1.13', 4.41, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[13]),
	createData(1, 'B3-1.14', 4.34, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[14]),
	// createData(1, 'B3-1.15', 0.00, 4000, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B31[15]),
	createData(1, 'B3-1.16', 4.99, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[16]),
	createData(1, 'B3-1.17', 5.06, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[17]),
	createData(1, 'B3-1.18', 4.62, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[18]),
	createData(1, 'B3-1.19', 2.65, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[19]),
	// createData(1, 'B3-1.20', 2.65, 4000, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B31[20]),
	// createData(1, 'B3-1.21', 2.65, 4000, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B31[21]),
	createData(1, 'B3-1.22', 3.37, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[22]),
	createData(1, 'B3-1.23', 2.61, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[23]),
	createData(1, 'B3-1.24', 2.61, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[24]),
	createData(1, 'B3-1.25', 2.73, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[25]),
	createData(1, 'B3-1.26', 2.48, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[26]),
	createData(1, 'B3-1.27', 2.48, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[27]),
	createData(1, 'B3-1.28', 3.53, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[28]),
	createData(1, 'B3-1.29', 3.53, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[29]),
	createData(1, 'B3-1.30', 2.74, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[30]),
	createData(1, 'B3-1.31', 2.74, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[31]),
	createData(1, 'B3-1.32', 2.74, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[32]),
	createData(1, 'B3-1.33', 2.38, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B31[33]),
	createData(1, 'B3-1.34', 2.38, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B31[34]),
];