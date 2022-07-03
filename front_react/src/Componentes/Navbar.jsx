import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg"  >
    <Container>
      <Navbar.Brand>Sistema de Compras</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="#link">Usuario</Nav.Link>
          <NavDropdown title="Otros" id="basic-nav-dropdown">
            <NavDropdown.Item href="/compras">Compras</NavDropdown.Item>
            <NavDropdown.Item href="/presupuesto">Presupuesto</NavDropdown.Item>
            <NavDropdown.Item href="/autorizaciones">Autorizaciones</NavDropdown.Item>
            <NavDropdown.Item href="/consulta">Consultas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar