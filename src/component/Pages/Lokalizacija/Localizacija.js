import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import Scontactuy from "../../Scontactuy/Scontactuy";
import './Localizacija.css'
const localMap = process.env.PUBLIC_URL+ '/pages/lokalizacija/localMap.png';
const blackCard = process.env.PUBLIC_URL+ '/pages/lokalizacija/blackCard.png';
const logoPoleska = process.env.PUBLIC_URL+ '/component/header/logo.png';

function Localizacija() {

    const url = 'https://www.google.com/maps/place/Poleska+5,+31-579+Krak%C3%B3w/@50.0719213,20.0063042,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x4716452f6b79f0af:0x222a5980d7bf264b!2sPoleska+5,+31-579+Krak%C3%B3w!3b1!8m2!3d50.0719179!4d20.0084929!3m4!1s0x4716452f6b79f0af:0x222a5980d7bf264b!8m2!3d50.0719179!4d20.0084929'

    const openNewWindow = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Container fluid={true}>
            <Container fluid={false} className={'mb-5'}>
            <div className='titlePage'>
                LOKALIZACJA
            </div>

            <Row className={"local-text-bottom"}>
                <Col className={"local-text-bottom-row"}>
                    <img src={logoPoleska} alt={'poleska'} style={{height:'1em'}} /> - położona w kameralnej części Czyżyn, wśród zieleni, doskonale skomunikowana z centrum
                    miasta.
                </Col>
                <Col className={"local-text-bottom-row"}>
                    W sąsiedztwie znajdują się:
                </Col>
                <Col className={"local-text-bottom-row"}>
                    <ul className={'text-left check-point'}>
                        <li className={"li-localizac"}>tereny zielone i rekreacyjne: Park AWF, Park Lotników;</li>
                        <li className={"li-localizac"}>uczelnie wyższe: AWF, Wydział Mechaniczny Politechniki
                            Krakowskiej;
                        </li>
                        <li className={"li-localizac"}>obiekty użyteczności publicznej, usługowe, biurowe: Muzeum
                            Lotnictwa Polskiego, strefa ekonomiczna - Krakowski Park Technologiczny, Comarch, Philip
                            Morris International, przychodnie lekarskie, szkoły, przedszkola, centrum handlowe M1,
                            "Czyżyny"
                        </li>
                    </ul>
                </Col>
            </Row>
            </Container>
            <Container fluid={false}>
                <div className={'block-google '}>
                    <div className={'line-google-map d-none d-lg-block'}></div>
                    <div className={'black-card-google d-none d-lg-block'} style={{
    cursor: 'pointer',
    width: '100%',
    backgroundImage: `url(${blackCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}} onClick={(event) => openNewWindow(url)}/>
                </div>
            </Container>

            <Container fluid={false} className={'mt-5 '}>
                <img src={localMap} width={'100%'} alt={'localMap'}></img>
                <Scontactuy/>
            </Container>
        </Container>
    )
}

export default Localizacija