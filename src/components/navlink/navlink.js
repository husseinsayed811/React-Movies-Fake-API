import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Languagecontext } from '../../context/language';

const Navlink = () => {
    const share = useSelector((state) => state.favourites.favourtmovise)
    const { languag } = useContext(Languagecontext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><h4>React Movies FAPI</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" fill variant="tabs" style={{ marginLeft:110}}>
                        <Link className="mx-4" to="/" style={{ textDecoration: "none"}}>Home :{languag}</Link>
                        <Link className="mx-4" to="/login" style={{ textDecoration: "none" }}>Login</Link>
                        <Link className="mx-4" to="/regester" style={{ textDecoration: "none" }}>Registeration</Link>
                        <Link to="/movies" style={{ textDecoration: "none" }} className="mx-4">Movies</Link>
                        <Link to="/movie" style={{ textDecoration: "none" }} className="mx-4">Favourites: {share.length}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navlink;
