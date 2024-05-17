import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">GoT</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/characters">Characters</Nav.Link>
        <Nav.Link href="/books">Books</Nav.Link>
        <Nav.Link href="/houses">Houses</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header