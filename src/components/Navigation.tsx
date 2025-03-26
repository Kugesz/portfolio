import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation: React.FC = () => {
  return (
    <Navbar className="mb-5 p-2 ps-4" bg="light" variant="light">
      <Navbar.Brand>Kovacs Gergo</Navbar.Brand>
      <Container className="ms-auto">
        <Nav className="me-auto">
          <Nav.Link href="/">Projektek</Nav.Link>
          <Nav.Link href="/contact">Kapcsolat</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
