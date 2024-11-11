import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./css/navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar sticky="top" expand="lg" className="nav_bar">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/">red ochavillo</Link>{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="tabs">
            <Nav.Link>
              <Link to="/work">work</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
