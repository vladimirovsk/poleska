import React, {useState} from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './Header.css'

const logo = process.env.PUBLIC_URL+ '/component/header/logo.png'

function Header() {
    const [show, setShow] = useState(false);

    const handleMouseOut = () => {
        setShow(!show);
    };

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
                            <NavDropdown title="OFERTA" id="nav-dropdown" show={show} onClick={handleMouseOut}>
                                <NavLink className={'nav-link nav-link-dropdown'}
                                         activeClassName="active"
                                         to={'/apartamenty'}
                                         onMouseOut={handleMouseOut}
                                         onClick={handleMouseOut}
                                >APARTAMENTY
                                </NavLink>

                                <NavLink className={'nav-link nav-link-dropdown'}
                                         activeClassName="active"
                                         to={'/garaze'}
                                         onMouseOut={handleMouseOut}
                                         onClick={handleMouseOut}
                                >GARAŻE I KOMÓRKI LOKATORSKIE
                                </NavLink>
                            </NavDropdown>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/podbrania'}>DO POBRANIA</NavLink>
                            <NavLink className={'nav-link'} activeClassName="active" to={'/zdjencia'}>ZDJĘCIA Z BUDOWY</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>

            </Navbar>
        </React.Fragment>
    )
}

export default Header
