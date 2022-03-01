import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from '../../image/logo.svg'
import {Envelope, GeoAlt, TelephoneFill} from 'react-bootstrap-icons';
import FloatButton from '../FloatButton/FloatButton'
import './Footer.css'

const FacebookImage = process.env.PUBLIC_URL + '/image/facebook.png';
const FacebookUrl = 'https://www.facebook.com/hkgroup.deweloper';

const InstagramImage = process.env.PUBLIC_URL + '/image/instagram.png';
const InstagramUrl = 'https://www.instagram.com/hkgroup.deweloper';


function Footer() {

    return (
        <Container className={'container-footer '} fluid={true}>
            <div className={'title-contact'}>KONTAKT</div>
            <Row className={'footer-text'}>
                <Col md={12} lg={4} className={''}>
                    HK GROUP Sp. z o.o. sp.k. <br/> <br/>
                    <GeoAlt/>ul. Kobierzyńska 211 lok.3, <br/>
                    <div className={'ml-3'}>30-383 Kraków</div>
                    <div className={'mt-3'}>
                        <div><a className={'footer-lik-email mr-3'} href={FacebookUrl}>
                            <Image src={FacebookImage} alt={'Facebook'}/>
                            </a>
                            <a className={'footer-lik-email ml-3'} href={InstagramUrl}>
                                <Image src={InstagramImage} alt={'Instagram'}/>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    NIP: 676 257 74 39 <br/>
                    REGON: 385 482 503<br/>
                    KRS: 000 082 76 12
                </Col>
                <Col md={12} lg={4}>
                    <div className={"contact-text-card p-0"}>
                        <ul className={'footer-ul p-0 mt-2'}>
                            <li>
                                <TelephoneFill style={{marginRight: '0.2em', fontSize: '1.2em'}}/>
                                +48 666 182 182
                            </li>

                            <li>
                                <Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
                                <a className={'footer-lik-email'} href="mailto:biuro@hkgroup.pl">
                                    biuro@hkgroup.pl
                                </a>
                            </li>
                            <li>
                                <Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
                                <a className={'footer-lik-email'} href="mailto:maciej.pietrzyk@hkgroup.pll">
                                    maciej.pietrzyk@hkgroup.pl
                                </a>
                            </li>
                            <li>
                                <Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
                                <a className={'footer-lik-email'} href="mailto:jakub.smulski@hkgroup.pl">
                                    jakub.smulski@hkgroup.pl
                                </a>
                            </li>
                        </ul>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col className={'mt-5 mb-4'}>
                    <img src={logo} alt={"logo"} width={100}></img>
                </Col>
            </Row>
            <FloatButton/>
        </Container>
)

}

export default Footer