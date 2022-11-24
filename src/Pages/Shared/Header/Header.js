import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden lg:invisible pt-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Navbar.Brand href="#home">Aradun-Book-Resale</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-menu">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Login</Link>
              <Link to="/login">Sign In</Link>
              <Link to="/signup">Sign Out</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
};

export default Header;
