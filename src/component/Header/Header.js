import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from './logo.png'

import './Header.css'

function Header() {
    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg"  sticky='top' >
                <Container fluid={true}>
                <Navbar.Brand href="/" >
                    <img className = {'brandLogo'}
                        src={logo}
                        alt='logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end mr-auto ">
                    <Nav className="mr-auto justify-content-end" activeKey="/" >
                            <NavLink exact className={'nav-link'} activeClassName="active" to={"/"}>O INWESTYCJI</NavLink>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/localizacija'}>LOKALIZACJA</NavLink>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/apartamenty'}>APARTAMENTY</NavLink>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/garaze'}>GARAŻE I KOMÓRKI LOKATORSKIE</NavLink>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/podbrania'}>DO POBRANIA</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>

            </Navbar>
        </React.Fragment>
    )
}

export default Header

/**
 *

 */