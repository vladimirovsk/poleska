import React from "react";

const pathCard = '/pages/garaze/';
const B1G1 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.1.pdf';
const B1G2 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.2.pdf';
const B1G3 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.3.pdf';
const B1G5 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.5.pdf';
const B1G6 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.6.pdf';
const B1G7 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.7.pdf';
const B1G8 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.8.pdf';
const B1G9 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.9.pdf';
const B1G10 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.10.pdf';
const B1G11 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.11.pdf';
const B1G12 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.12.pdf';
const B1G13 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.13.pdf';
const B1G14 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.14.pdf';
const B1G15 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.15.pdf';
const B1G16 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.16.pdf';
const B1G17 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.17.pdf';
const B1G18 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.18.pdf';
const B1G19 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B1.19.pdf';

const B2G1 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.1.pdf';
const B2G2 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.2.pdf';
const B2G3 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.3.pdf';
const B2G4 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.4.pdf';
const B2G5 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.5.pdf';
const B2G6 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.6.pdf';
const B2G7 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.7.pdf';
const B2G8 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.8.pdf';
const B2G9 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.9.pdf';
const B2G10 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.10.pdf';
const B2G11 = process.env.PUBLIC_URL+pathCard+'GarazeDetail/B2.11.pdf';

const greenPdf = process.env.PUBLIC_URL+"/pages/apartamenty/green_pdf.svg";

function createData(id, number, metraz, karta, status, cardDetail) {
	return {id, number, metraz, karta, status, cardDetail};
}

export const columns = [
	{id: 'number', label: 'Numer'},
	{id: 'metraz', label: 'Cena (PLN)', align: 'right'},
	{id: 'karta', label: 'Karty miejsc garażowych', align: 'center'},
	{id: 'status', label: 'Status'},
]

const B1G = [ null,
	B1G1, B1G2, B1G3, null, B1G5, B1G6, B1G7, B1G8, B1G9,
	B1G10, B1G11, B1G12, B1G13, B1G14, B1G15, B1G16, B1G17, B1G18, B1G19
]

const B2G = [ null,
	B2G1, B2G2, B2G3, B2G4, B2G5, B2G6, B2G7, B2G8, B2G9,
	B2G10, B2G11
]

export const rowsGaraze = [
	createData(1, 'B1.1', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[1]),
	createData(2, 'B1.2', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[2]),
	createData(3, 'B1.3', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[3]),
	createData(5, 'B1.5', '50.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[5]),
	createData(6, 'B1.6', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[6]),
	createData(7, 'B1.7', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B1G[7]),
	createData(8, 'B1.8', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[8]),
	createData(9, 'B1.9', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[9]),
	createData(10, 'B1.10', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[10]),
	createData(11, 'B1.11', '50.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[11]),
	createData(12, 'B1.12', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B1G[12]),
	createData(13, 'B1.13', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B1G[13]),
	createData(14, 'B1.14-B1.14A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne', B1G[14]),
	createData(15, 'B1.15-B1.15A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[15]),
	createData(16, 'B1.16-B1.16A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[16]),
	createData(17, 'B1.17-B1.17A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[17]),
	createData(18, 'B1.18-B1.18A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[18]),
	createData(19, 'B1.19-B1.19A', '70.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B1G[19]),
	createData(20, 'B2.1', '50.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B2G[1]),
	createData(21, 'B2.2', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[2]),
	createData(22, 'B2.3', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[3]),
	createData(23, 'B2.4', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[4]),
	createData(24, 'B2.5', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[5]),
	createData(25, 'B2.6', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[6]),
	createData(26, 'B2.7', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'wolne',B2G[7]),
	createData(27, 'B2.8', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane',B2G[8]),
	createData(28, 'B2.9', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B2G[9]),
	createData(29, 'B2.10', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B2G[10]),
	createData(30, 'B2.11', '40.000', <img className='iconPdf' src={greenPdf} alt={'pdf'}/>, 'sprzedane', B2G[11]),
];

