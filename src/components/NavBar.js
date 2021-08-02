import React from 'react'
import { Nav,Navbar, Container, NavLink, } from "react-bootstrap";





const NavBar = () => {

    return (
      <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      
    <Navbar.Brand href="/home">Travel</Navbar.Brand>
    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/about"  activeClassName="active">About</Nav.Link>
        <Nav.Link href="/gallery" activeClassName="active">Gallery</Nav.Link>
        <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </Nav>
    </Navbar.Collapse>
  
  </Container>
</Navbar>
      
    )
}

export default NavBar;