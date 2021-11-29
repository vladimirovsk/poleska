import greenPdf from "../Apartamenty/green_pdf.svg";
import React from "react";

import B31G4 from './KomorkaDetail/B3.-1.4.pdf';
import B31G5 from './KomorkaDetail/B3.-1.5.pdf';
import B31G6 from './KomorkaDetail/B3.-1.6.pdf';
import B31G7 from './KomorkaDetail/B3.-1.7.pdf';
import B31G8 from './KomorkaDetail/B3.-1.8.pdf';
import B31G9 from './KomorkaDetail/B3.-1.9.pdf';
import B31G10 from './KomorkaDetail/B3.-1.10.pdf';
import B31G11 from './KomorkaDetail/B3.-1.11.pdf';

import B31G13 from './KomorkaDetail/B3.-1.13.pdf';
import B31G14 from './KomorkaDetail/B3.-1.14.pdf';
import B31G15 from './KomorkaDetail/B3.-1.15.pdf';
import B31G16 from './KomorkaDetail/B3.-1.16.pdf';
import B31G17 from './KomorkaDetail/B3.-1.17.pdf';
import B31G18 from './KomorkaDetail/B3.-1.18.pdf';
import B31G19 from './KomorkaDetail/B3.-1.19.pdf';
import B31G20 from './KomorkaDetail/B3.-1.20.pdf';
import B31G21 from './KomorkaDetail/B3.-1.21.pdf';
import B31G22 from './KomorkaDetail/B3.-1.22.pdf';
import B31G23 from './KomorkaDetail/B3.-1.23.pdf';
import B31G24 from './KomorkaDetail/B3.-1.24.pdf';
import B31G25 from './KomorkaDetail/B3.-1.25.pdf';
import B31G26 from './KomorkaDetail/B3.-1.26.pdf';
import B31G27 from './KomorkaDetail/B3.-1.27.pdf';
import B31G28 from './KomorkaDetail/B3.-1.28.pdf';
import B31G29 from './KomorkaDetail/B3.-1.29.pdf';
import B31G30 from './KomorkaDetail/B3.-1.30.pdf';
import B31G31 from './KomorkaDetail/B3.-1.31.pdf';
import B31G32 from './KomorkaDetail/B3.-1.32.pdf';
import B31G33 from './KomorkaDetail/B3.-1.33.pdf';
import B31G34 from './KomorkaDetail/B3.-1.34.pdf';

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
	createData(1, 'B3-1.5', 2.21, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B31[5]),
	createData(1, 'B3-1.6', 2.51, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[6]),
	createData(1, 'B3-1.7', 2.51, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[7]),
	createData(1, 'B3-1.8', 1.46, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[8]),
	createData(1, 'B3-1.9', 1.39, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedana', B31[9]),
	createData(1, 'B3-1.10', 1.57, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B31[10]),
	createData(1, 'B3-1.11', 1.57, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B31[11]),
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
	createData(1, 'B3-1.33', 2.38, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B31[33]),
	createData(1, 'B3-1.34', 2.38, '4.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B31[34]),
];