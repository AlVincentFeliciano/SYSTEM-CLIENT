import { useContext, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';



export default function AppNavbar(){

    const { user } = useContext(UserContext);

    return(
        <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow">
        <Container>
            <Navbar.Brand href="#home" className='fw-bold'>UA ENROLLMENT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>

                {
                    (user.token !== null) ?
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}