import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Aradun-Book-Resale</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Seller</Nav.Link>
              <Nav.Link href="#link">Buyer</Nav.Link>
              <Nav.Link href="#link">Dashboard</Nav.Link>
              <Nav.Link href="#link">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
};

export default Header;
