import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    const white = { color: 'white' };
    return (
        <Navbar className='navbar navbar-dark' style={{"background-color": "#374f2f"}}>
            <Container>
                <Navbar.Brand href="#home" style={white}>Karthik Nemmani</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="" href="#projects" style={white}>Projects</Nav.Link>
                        <Nav.Link href="#extracurriculars" style={white}>Extracurriculars</Nav.Link>
                        <Nav.Link href="#skills" style={white}>Skills</Nav.Link>
                        <Nav.Link href="#contact" style={white}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

