import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function BSNLNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">BSNL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/individual">Individual</Nav.Link>
            <Nav.Link as={Link} to="/enterprise">Enterprise</Nav.Link>
            <Nav.Link as={Link} to="/tenders">Tenders</Nav.Link>
            <Nav.Link as={Link} to="/investors">Investors</Nav.Link>
            <Nav.Link as={Link} to="/about-bsnl">About BSNL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BSNLNavbar;
