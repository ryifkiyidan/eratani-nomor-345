import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComponent() {
  return (
    <Navbar className="p-3" bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Eratani App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nomor3">
              <Nav.Link>Nomor 3</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nomor4">
              <Nav.Link>Nomor 4</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nomor5">
              <Nav.Link>Nomor 5</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
