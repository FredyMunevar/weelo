import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function WeeloHeaderDropdown() {
    return (
        <header>
            <Navbar collapseOnSelect expand="sm" variant="dark">
                <Navbar.Brand className="col-2 d-block" href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-nvabar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <NavDropdown title="Our services" id="nav-dropdown">
                        <NavDropdown.Item eventKey="1.1">Tenant screening</NavDropdown.Item>
                        <NavDropdown.Item eventKey="1.2">Collect rent on line</NavDropdown.Item>
                        <NavDropdown.Item eventKey="1.3">Pay rent on line</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link eventKey="2" href="#">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="b-button__secondary">
                        <Nav.Link eventKey="2" title="Item">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="b-button__primary">
                        <Nav.Link eventKey="3" title="Item">Get the app</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}