import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavbarDisplay(){
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-white">
        //     <Link className="navbar-brand green-button" to="/">
        //         <h2> Chelsey Craig </h2>
        //     </Link>
        //     <button clLinkss="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        //         aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <section className="collapse navbar-collapse" id="navbarNavDropdown">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to="/">About</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/portfolio">Portfolio</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/contact">Contact</Link>
        //             </li>
        //         </ul>
        //     </section>
        // </nav>
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">                    
                <Link className="navbar-brand green-button" to="/">
                    <h2> Chelsey Craig </h2>
                </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#">
                <Link className="nav-link" to="/">About</Link>
                </Nav.Link>
                <Nav.Link href="#">                
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </Nav.Link>
                <Nav.Link href="#">                
                <Link className="nav-link" to="/contact">Contact</Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </>
	);
}

export default NavbarDisplay;