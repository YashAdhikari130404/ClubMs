import React from "react";
import "./Navbar.css"
import { Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import './Nav_media.css' ;

function Mynavbar()
{
    return (
        <header className="container-fluid py-md-2 py-sm-0 shadow-lg position-sticky ">
            <Container>
                <div className="row align-items-center">
                    <figure className="col-sm-6 mb-0 ps-md-5 ps-sm-0 text-start ">
                        <img src={logo} alt="" className="navlogo"/>
                    </figure>

                    <div className="col-sm-6">
                        <div className="d-flex col-cm-6 gap-4 p-md-4 p-0 justify-content-end btn-outer align-self-center rightcont">
                            <NavLink to="/" className="text-decoration-none mya">HOME</NavLink>
                            <NavDropdown title="CLUBS" id="basic-nav-dropdown" className="mya">
                                <NavDropdown.Item href="/nss-home">NSS</NavDropdown.Item>
                                <NavDropdown.Item href="/EDC">EDC</NavDropdown.Item>
                                <NavDropdown.Item href="/IEE">PASC</NavDropdown.Item>
                          </NavDropdown>
                          <NavLink to="/profile" className="text-decoration-none mya">Profile</NavLink>
                          <NavLink to="/logout" className="text-decoration-none mya">LOGOUT</NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Mynavbar