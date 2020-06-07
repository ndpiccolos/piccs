import React, { Component } from 'react'
import '../App.css'; 
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';



export default class Navigation extends Component {
    render() {
      return (
        <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">the Piccolos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="members">Members</Nav.Link>
            <Nav.Link href="schedule">Schedule</Nav.Link>
            <Nav.Link href="tradition">Tradition</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="instagram">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="facebook">Facebook</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        {/* <Nav className="mr-auto">
                <div className="social-buttons"><FaFacebookSquare size={30} color={"grey"}/></div>
                <div className="social-buttons"><FaInstagram size={30} color={"grey"}/></div>
                <div className="social-buttons"><FaGithub size={30} color={"grey"}/></div>
        </Nav> */}
        </Navbar>
      )
    }
}