import React from "react";
import greenPdf from "./green_pdf.svg";

import B1M1 from './CardDetail/B1.M1.pdf'
import B1M2 from './CardDetail/B1.M2.pdf'
import B1M3 from './CardDetail/B1.M3.pdf'
import B1M4 from './CardDetail/B1.M4.pdf'
import B1M5 from './CardDetail/B1.M5.pdf'
import B1M6 from './CardDetail/B1.M6.pdf'
import B1M7 from './CardDetail/B1.M7.pdf'
import B1M8 from './CardDetail/B1.M8.pdf'
import B1M9 from './CardDetail/B1.M9.pdf'
import B1M10 from './CardDetail/B1.M10.pdf'
import B1M11 from './CardDetail/B1.M11.pdf'

import B2M1 from './CardDetail/B2.M1.pdf'
import B2M2 from './CardDetail/B2.M2.pdf'
import B2M3 from './CardDetail/B2.M3.pdf'
import B2M4 from './CardDetail/B2.M4.pdf'
import B2M5 from './CardDetail/B2.M5.pdf'
import B2M6 from './CardDetail/B2.M6.pdf'
import B2M7 from './CardDetail/B2.M7.pdf'
import B2M8 from './CardDetail/B2.M8.pdf'


import B3M1 from './CardDetail/B3.M1.pdf'
import B3M2 from './CardDetail/B3.M2.pdf'
import B3M3 from './CardDetail/B3.M3.pdf'
import B3M4 from './CardDetail/B3.M4.pdf'
import B3M5 from './CardDetail/B3.M5.pdf'
import B3M6 from './CardDetail/B3.M6.pdf'
import B3M7 from './CardDetail/B3.M7.pdf'
import B3M8 from './CardDetail/B3.M8.pdf'

const B1M = [
	null, B1M1, B1M2, B1M3, B1M4, B1M5, B1M6, B1M7, B1M8, B1M9, B1M10, B1M11
]

const B2M = [
	null, B2M1, B2M2, B2M3, B2M4, B2M5, B2M6, B2M7, B2M8
]

const B3M = [
	null, B3M1, B3M2, B3M3, B3M4, B3M5, B3M6, B3M7, B3M8
]

function createData(id, number, metraz, pokoi, karta, status, cardDetail) {
	return {id, number, metraz, pokoi, karta, status, cardDetail};
}

export const columns = [
	{id: 'number', label: 'Numer apartamentu'},
	{id: 'metraz', label: 'Metraż', align: 'right'},
	{id: 'pokoi', label: 'Liczba pokoi', align: 'right'},
	{id: 'karta', label: 'Karty mieszkań', align: 'center'},
	{id: 'status', label: 'Status'}
	//minWidth: 180,

]

export const rowsParter = [
	createData(1, 'B1.M1', '65.52', 4, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[1]),
	createData(2, 'B1.M2', '43.71', 2, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[2]),
	createData(3, 'B2.M1', '60.05', 3, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B2M[1]),
	createData(4, 'B2.M2', '68.69', 4, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[2]),
	createData(5, 'B3.M1', '39.74', 2, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[1]),
	createData(6, 'B3.M2', '49.85', 2, <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[2]),
];

export const rowsPietro1 = [
	createData(1, 'B1.M3', '86.67', 4,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[3]),
	createData(2, 'B1.M4', '43.53', 2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[4]),
	createData(3, 'B1.M5', '54.39', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[5]),
	createData(4, 'B2.M3', '59.87', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[3]),
	createData(5, 'B2.M4', '83.34', 5,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[4]),
	createData(6, 'B3.M3', '49.65', 2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B3M[3]),
	createData(7, 'B3.M4', '74.76', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[4]),
];

export const rowsPietro2 = [
	createData(1, 'B1.M6', '86.40', 4,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[6]),
	createData(2, 'B1.M7', '43.35', 2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[7]),
	createData(3, 'B1.M8', '54.19', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[8]),
	createData(4, 'B2.M5', '59.69', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[5]),
	createData(5, 'B2.M6', '83.62', 4,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[6]),
	createData(6, 'B3.M5', '49.53', 2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[5]),
	createData(7, 'B3.M6', '68.17', 3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[6]),
];

export const rowsPietro3 = [
	createData(1, 'B1.M9', '87.10',4,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[9]),
	createData(2, 'B1.M10','43.17',2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[10]),
	createData(3, 'B1.M11','54.09',3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B1M[11]),
	createData(4, 'B2.M7', '59.51',3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[7]),
	createData(5, 'B2.M8', '83.51',4,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B2M[8]),
	createData(6, 'B3.M7', '49.50',2,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[7]),
	createData(7, 'B3.M8', '67.82',3,<img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'zarezerwowane', B3M[8]),
];

