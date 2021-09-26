import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter } from "react-router-dom";
function NavMenu() {
  return (
    <BrowserRouter>
      <header className='header-area header-sticky'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Navbar className='main-nav' expand='lg'>
                <Navbar.Brand
                  href='https://www.goindia.digital/'
                  className='logo'>
                  <img src='assets/images/Logo.png' alt='Go India Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='mr-auto'>
                    <Nav.Link href='/'>HOME</Nav.Link>
                    <NavDropdown className='lvl2' title='PRODUCTS'>
                      <NavDropdown.Item className='li2' href='#goanalytics'>
                        Go Analytics
                      </NavDropdown.Item>
                      <NavDropdown.Item className='li2' href='#digikaagaz'>
                        DIGI KAAGAZ
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item  className="li2" href="#" >GO KRISHI</NavDropdown.Item>*/}
                    </NavDropdown>
                    <NavDropdown className='lvl2' title='SERVICES'>
                      <NavDropdown.Item className='li2' href='#dk_learning'>
                        DIGI KAAGAZ LEARNING
                      </NavDropdown.Item>
                      <NavDropdown.Item className='li2' href='#'>
                        IT CONSULTING
                      </NavDropdown.Item>
                      <NavDropdown.Item className='li2' href='#bman'>
                        BUSINESS MANAGEMENT
                      </NavDropdown.Item>
                      <NavDropdown.Item className='li2' href='#'>
                        FOOD SUPPLY CHAIN
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#faq'>FAQ</Nav.Link>
                    <Nav.Link href='#contactus'>CONTACT US</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </BrowserRouter>
  );
}
export default NavMenu;
