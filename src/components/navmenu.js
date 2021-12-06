import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
function NavMenu() {
  return (
    <header className='header-area header-sticky'>
      <Navbar
        collapseOnSelect
        variant={"light"}
        bg={"light"}
        fixed={"top"}
        expand={"sm"}>
        <Container>
          <Navbar.Brand href='/'>
            <FontAwesomeIcon size={"lg"} icon={faLightbulb} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>HOME</Nav.Link>
              <NavDropdown title='PRODUCTS'>
                {products.map((item, i) => (
                  <NavDropdown.Item key={i} href='#doremgipsum'>
                    {item?.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title='SERVICES'>
                {services.map((item, i) => (
                  <NavDropdown.Item key={i} href='#services'>
                    {item?.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href='#faq'>FAQ</Nav.Link>
              <Nav.Link href='#reviews'>REVIEWS</Nav.Link>
              <Nav.Link href='#contactus'>CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

const products = [
  {
    name: "Product 1",
  },
  {
    name: "Product 2",
  },
  {
    name: "Product 3",
  },
];

const services = [
  {
    name: "Services 1",
  },
  {
    name: "Services 2",
  },
  {
    name: "Services 3",
  },
];

export default withRouter(NavMenu);
