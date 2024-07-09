import React from 'react'
import { Container, Navbar, Nav,Col, Row, Button } from 'react-bootstrap';
import logo from '../assets/images/logo-dark.png';
import { NavLink } from 'react-router-dom';
import { SlEnvolope, SlPhone } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaRegClock} from "react-icons/fa";

const Header = () => {
  return (
    <>
    <header className='top_header text-white p-2 background-gradient d-none d-md-block'>
      <Container>
      <Row>
        <Col md={8}>
          <a className="text-white me-3" href="mailto:contact@idevelopingsolutions.com"><SlEnvolope />  contact@idevelopingsolutions.com </a>
          <a className="text-white" href="tel:+91-186-3590033"><SlPhone /> +91-186-3590033</a>
        </Col>
        <Col md={4} className='text-end'>
            <span className='me-4'><FaRegClock /> 09:00am-6:00pm</span>
            <a className="text-white" href="https://www.facebook.com/IDevelopingSolutions/" target="_blank"><FaFacebookF /></a>
            <a className="text-white" href="https://www.instagram.com/ideveloping2020/?igshid=ZDdkNTZiNTM%3D" target="_blank"><FaInstagram /></a>
        </Col>
      </Row>
      </Container>
    </header>
     <Navbar expand='lg' bg="light">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt='Logo' width="150" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-lg-flex d-block align-items-center cs-navigation">
                <NavLink className="nav-link fw-bolder" to="/"> Home </NavLink>
                <NavLink className="nav-link fw-bolder" to="/About"> About us </NavLink>
                <NavLink className="nav-link fw-bolder" to="/services"> Services </NavLink>
                <NavLink className="nav-link fw-bolder" to="/portfoliout"> Our Portfolio </NavLink>
                <NavLink className="nav-link fw-bolder" to="/contact"> Contact </NavLink>
                <NavLink className="nav-link fw-bolder" to="/contact"> 
                  <Button className='background-gradient cs-btn border-0 rounded' size="lg">
                    Get A Quote 
                  </Button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;