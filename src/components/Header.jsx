import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 // Import a custom CSS file for styling
import logo from '../assets/logo.jpg'
import '../style/Header.css'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="custom-logo">
          <img
            src={logo}  // Replace with your logo URL
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="RentBro Logo"
            style={{borderRadius:"20px"}}
          />
          RentBro
        </Navbar.Brand>

        {/* Responsive Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-links">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* Sign Up and Log In Buttons */}
          <Nav>
            <LinkContainer to="/signup">
              <Button variant="outline-primary" className="me-2 custom-button">
                Sign Up
              </Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button variant="primary" className="custom-button">Log In</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
