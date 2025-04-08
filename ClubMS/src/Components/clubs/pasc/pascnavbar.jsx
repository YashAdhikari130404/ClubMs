
import React from "react";
import "./pascnavmedia.css"
import { Container, NavDropdown } from "react-bootstrap";
import pascnavlogo from '../../../assets/images/pascnavlogo.jpg'
import { NavLink } from "react-router-dom";


function Pascnavbar()
{
    return (
        <header className="container-fluid py-md-2 py-sm-0 shadow-lg position-sticky bg-success pascnavbar">
            <Container>
                <div className="row align-items-center">
                    <figure className="col-sm-6 mb-0 ps-md-5 ps-sm-0 text-start">
                        <img src={pascnavlogo} alt="" className="pascnavlogo"/>
                    </figure>

                    <div className="col-sm-6 ms-0">
                        <div className="d-flex col-cm-6 gap-4 p-md-4 p-0 justify-content-end btn-outer align-self-center rightcont ">
                          <NavLink to="/pasc-home" className="text-decoration-none pasc">Home</NavLink>
                          <NavLink to="/pasc-activity" className="text-decoration-none pasc">Activities</NavLink>
                          <NavLink to="/pasc-team" className="text-decoration-none pasc">Team</NavLink>
                          <NavLink to="/pasc-join" className="text-decoration-none pasc">Register</NavLink>
                          <NavLink to="/user_login" className="text-decoration-none pasc">Logout</NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Pascnavbar