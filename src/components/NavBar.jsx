import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./css/navbar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="nav_bar bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/">red ochavillo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="tabs">
            <Nav.Link href="works">works</Nav.Link>
            <Nav.Link href="contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
