import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className={"px-4"}>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src="logo.png" width="40" height="40" className="d-inline-block align-top" alt="Cybersleuth"/>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={"me-auto"}>
                    <LinkContainer to="/digimons">
                        <Nav.Link>Digimons</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/attacks">
                        <Nav.Link>Attacks</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/team-planner">
                        <Nav.Link>Team Planner</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header;