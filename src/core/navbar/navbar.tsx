import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../App.css";

const AppNavBar: React.FC = () => {
  return (
    <Navbar className='bg-twice-pink' expand="lg">
      <Container>
        <Navbar.Brand className='text-dark' as={NavLink} to="/">Twice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'enlace active mx-2' : 'enlace mx-2')}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/miembros"
              className={({ isActive }) => (isActive ? 'enlace active mx-2' : 'enlace mx-2')}
            >
              Miembros
            </NavLink>
            <NavLink
              to="/noticias"
              className={({ isActive }) => (isActive ? 'enlace active mx-2' : 'enlace mx-2')}
            >
              Noticias
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
