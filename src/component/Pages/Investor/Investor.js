import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Slider from "../../Slider/Slider"
import Scontactuy from "../../Scontactuy/Scontactuy";
import './Investor.css'

const pathCard = '/pages/investor';
const image1 = process.env.PUBLIC_URL+pathCard+ './poleska1.png'
const image2 = process.env.PUBLIC_URL+pathCard+ './poleska2.png'

const poleskaSlide1 = process.env.PUBLIC_URL+pathCard+ "/poleska/image1.png";
const poleskaSlide2 = process.env.PUBLIC_URL+pathCard+ "/poleska/image2.png";
const poleskaSlide3 = process.env.PUBLIC_URL+pathCard+ "/poleska/image3.png";

const poleskaSlide4 = process.env.PUBLIC_URL+pathCard+ "/poleska/image4.png";
const poleskaSlide5 = process.env.PUBLIC_URL+pathCard+ "/poleska/image5.png";
const poleskaSlide6 = process.env.PUBLIC_URL+pathCard+ "/poleska/image6.png";
const poleskaSlide7 = process.env.PUBLIC_URL+pathCard+ "/poleska/image7.png";

const logoPoleska = process.env.PUBLIC_URL+'/component/header/logo.png';

function Investor() {

	const imageData1 = [
		poleskaSlide1,
		poleskaSlide2,
		poleskaSlide3
	]

	const imageData2 = [
		poleskaSlide4,
		poleskaSlide5,
		poleskaSlide6,
		poleskaSlide7
	]

	return (
		<React.Fragment>
			<Container fluid={false} className={'root'}>
				<Slider imageData={imageData1} Caption={""}/>
				<div className='titlePage'>
					O INWESTYCJI
				</div>
				<Container fluid={true}>
					<Row style={{marginTop: '2em'}}>
						<Col md={12} lg={6} className={'columnImage'} style={{
							backgroundImage: `url(${image1})`
						}}>
						</Col>
						<Col md={12} lg={6} className={'columnText'}>
							<div style={{textAlign: "left"}} className={'textCenter'}><img src={logoPoleska} alt={'Poleska 5'} style={{height: '1em'}}/> to
								kameralny budynek wielorodzinny posiadający 4 kondygnację naziemne oraz 1 podziemną.
							</div>
							<div className={'textCenter'}>Na 27 zaprojektowanych mieszkań o zróżnicowanym metrażu
								przypadają trzy osobne klatki z windami.
							</div>
						</Col>
					</Row>
					<Row style={{marginTop: '2em', marginBottom: '2em'}}>
						<Col md={12} lg={6} className={'columnText'}>
							<div className={'textCenter'}>W garażu podziemnym mieści się 35 miejsc parkingowych w tym
								sześć podwójnych.
							</div>
						</Col>
						<Col md={12} lg={6} className={'columnImage'} style={{
							backgroundImage: `url(${image2})`
						}}>

						</Col>
					</Row>

					<Row className={"text-bottom"}>
						<Col className={"text-bottom-row"}>
							<img src={logoPoleska} alt={'Poleska 5'} style={{height: '1em'}}/> to budynek, który wyróżnia nowoczesna kolorystyka, koncept architektoniczny z
							dużymi panoramicznymi oknami.
						</Col>
						<Col className={"text-bottom-row"}>
							Wszystkie mieszkania na piętrze będą posiadać balkony, a na parterze własne ogródki.
						</Col>
						<Col className={"text-bottom-row"}>
							Do dyspozycji mieszkańców przeznaczamy strefę integracji i wypoczynku usytuowaną w sercu
							zespołu budynków.
						</Col>
						<Col className={"text-bottom-row"}>
							To idealne miejsce z zaaranżowaną zielenią, gdzie każdy znajdzie dla siebie przestrzeń aby
							się zrelaksować.
						</Col>
					</Row>
				</Container>
			</Container>
			<Slider imageData={imageData2} Caption={""}/>
			<Scontactuy/>

		</React.Fragment>
	)
}

export default Investor