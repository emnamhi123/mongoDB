import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  const style = {
    textDecoration: "none",
    color: "white",
    marginRight: "10px",
  };

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Link style={style} to="/">
              Home
            </Link>
            <Link style={style} to="/services">
              Services
            </Link>
            <Link style={style} to="/profile">
              Profile
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
