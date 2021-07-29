import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../styles/header.scss'

export const Header: FC = () => (
  <Navbar
    fixed="top"
    collapseOnSelect
    expand="md"
    id="header"
    className="burger burger-arrow"
    bg="light"
    variant="light"
  >
    <Container>
      <Navbar.Brand id="blog-title">
        <Link to="/">そららいどのブログ</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto header-contents">
          <Nav.Link className="header-content">
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link className="header-content">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  // <header id="header">
  //   <Navbar>
  //     <Container>
  //       <Navbar.Brand id="blog-title">
  //         <Link to="/">そららいどのブログ</Link>
  //       </Navbar.Brand>
  //       <Nav className="me-auto header-contents">
  //         <span>
  //           <Link to="/">About</Link>
  //         </span>
  //         <span>
  //           <Link to="/">Articles</Link>
  //         </span>
  //         <span>
  //           <Link to="/">Contact</Link>
  //         </span>
  //       </Nav>
  //     </Container>
  //   </Navbar>
  // </header>
)
