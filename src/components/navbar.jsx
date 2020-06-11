import React, { Component } from 'react'
import '../App.css'; 
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';
import { HashRouter, Route, Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
      return (
        <Navbar bg="white" expand="lg" style={{ fontFamily: "RalewayLight" }}>
        <Navbar.Brand href="/piccs">the Piccolos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/piccs">Home</Nav.Link>
            <Nav.Link><Link to="about">About</Link></Nav.Link>
            <Nav.Link><Link to="members">Current Members</Link></Nav.Link>
            <Nav.Link><Link to="links">Links</Link></Nav.Link>
            <Nav.Link><Link to="faq">FAQ</Link></Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="instagram">Instagram</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="facebook">Facebook</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="contact">Contact Us</Link></Nav.Link>
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