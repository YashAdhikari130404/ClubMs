
import React from "react";
import "./navmedia.css"
import { Container, NavDropdown } from "react-bootstrap";
import nsslogo from "../../../assets/images/nsslogo.jpg" ;
import { NavLink } from "react-router-dom";


function Mynavbar()
{
    return (
        <header className="container-fluid py-md-2 py-sm-0 shadow-lg position-sticky bg-success nssnavbar">
            <Container>
                <div className="row align-items-center">
                    <figure className="col-sm-6 mb-0 ps-md-5 ps-sm-0 text-start">
                        <img src={nsslogo} alt="" className="nssnavlogo"/>
                    </figure>

                    <div className="col-sm-6 ms-0">
                        <div className="d-flex col-cm-6 gap-4 p-md-4 p-0 justify-content-end btn-outer align-self-center rightcont">
                            <NavLink to="/nss-home" className="text-decoration-none nss">Home</NavLink>
                          <NavLink to="/nss-activity" className="text-decoration-none nss">Activities</NavLink>
                          <NavLink to="/nss-team" className="text-decoration-none nss">Team</NavLink>
                          <NavLink to="/nss-join" className="text-decoration-none nss">Register</NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Mynavbar