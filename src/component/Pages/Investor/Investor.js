import React from "react";
import {Container, Row, Col, Modal, Button, Image} from 'react-bootstrap';
import Slider from "../../Slider/Slider"
import Scontactuy from "../../Scontactuy/Scontactuy";
import './Investor.css'

const pathCard = '/pages/investor';
const image1 = process.env.PUBLIC_URL+pathCard+ '/poleska1.png'
const image2 = process.env.PUBLIC_URL+pathCard+ '/poleska2.png'

const poleskaSlide1 = process.env.PUBLIC_URL+pathCard+ "/poleska/image1.png";
const poleskaSlide2 = process.env.PUBLIC_URL+pathCard+ "/poleska/image2.png";
const poleskaSlide3 = process.env.PUBLIC_URL+pathCard+ "/poleska/image3.png";

const poleskaSlide4 = process.env.PUBLIC_URL+pathCard+ "/poleska/image4.png";
const poleskaSlide5 = process.env.PUBLIC_URL+pathCard+ "/poleska/image5.png";
const poleskaSlide6 = process.env.PUBLIC_URL+pathCard+ "/poleska/image6.png";
const poleskaSlide7 = process.env.PUBLIC_URL+pathCard+ "/poleska/image7.png";

const logoPoleska = process.env.PUBLIC_URL+'/component/header/logo.png';

const FacebookImage = process.env.PUBLIC_URL + '/image/facebook.png';
const FacebookUrl = 'https://www.facebook.com/hkgroup.deweloper';

const InstagramImage = process.env.PUBLIC_URL + '/image/instagram.png';
const InstagramUrl = 'https://www.instagram.com/hkgroup.deweloper';

function Investor() {
	const [showDialog, setShowDialog] = React.useState(true);

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

	const handleDialogClose = () =>{
		setShowDialog(false);
	}

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

			<Modal centered size={'lg'}
					// dialogClassName="modal-90w"
					 show={showDialog} onHide={handleDialogClose}>
				<Modal.Header closeButton>
					<Modal.Title>Zapraszamy do polubienia nas na Facebook i Instagramie!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col className={'m-5 mt-2 mb-2 text-center'}>
							<Image src={FacebookImage} alt={'Facebook'} className={'mr-2'} />
							<a href={FacebookUrl}>{FacebookUrl}</a>


						</Col>
					</Row>
					<Row>
						<Col className={'m-5 mt-2 mb-2 text-center'}>
							<Image src={InstagramImage} alt={'Instagram'} className={'mr-2'} />
							<a href={InstagramUrl}>{InstagramUrl}</a>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleDialogClose}>
						Zamknij
					</Button>
				</Modal.Footer>
			</Modal>

		</React.Fragment>
	)
}

export default Investor