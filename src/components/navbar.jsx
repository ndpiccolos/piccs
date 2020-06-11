import React, { Component } from 'react'
import '../App.css'; 
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';
import { HashRouter, Route, Link, NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
      return (
        <Navbar bg="white" expand="lg" style={{ fontFamily: "RalewayLight" }}>
        <Navbar.Brand href="/piccs">the Piccolos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><NavLink to="/" activeStyle={{ color: 'grey' }} style={{color: 'grey'}}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="about" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="members" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>Current Members</NavLink></Nav.Link>
            <Nav.Link><NavLink to="links" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>Links</NavLink></Nav.Link>
            <Nav.Link><NavLink to="faq" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>FAQ</NavLink></Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink to="instagram" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>Instagram</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="facebook" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>Facebook</NavLink></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><NavLink to="contact" activeStyle={{ color: 'black' }} style={{color: 'grey'}}>Contact Us</NavLink></Nav.Link>
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