import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <p style={{ color: "black", fontSize: "20px" }}>Home</p>
    //   <Link to="/projects">
    //     <p style={{ color: "black" }}>projects </p>
    //   </Link>
    //   <Link to="/blog">
    //     <p style={{ color: "black" }}>blogs </p>
    //   </Link>
    //   <FontAwesomeIcon icon={faGithub} />
    // </Navbar>
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mudassir</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/projects">projects</Link>
              <Link to="/blog">blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
