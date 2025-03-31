 /* <NavLink to="/home" className="text-decoration-none mya">
                HOME
              </NavLink>*/

import React from "react";
import "./Navbar.css";
import { Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Nav_media.css";

function Navbar() {
  const navigate = useNavigate(); // Initialize navigate

  // Handle Logout Click
  const handleLogout = () => {
    // Clear any session storage or tokens if required
    localStorage.removeItem("userToken"); // Optional: Clear token if stored
    navigate("/"); // Redirect to the start page
  };

  return (
    <header className="container-fluid py-md-2 py-sm-0 shadow-lg position-sticky">
      <Container>
        <div className="row align-items-center">
          <figure className="col-sm-6 mb-0 ps-md-5 ps-sm-0 text-start">
            <img src={logo} alt="" className="navlogo" />
          </figure>

          <div className="col-sm-6">
            <div className="d-flex col-cm-6 gap-4 p-md-4 p-0 justify-content-end btn-outer align-self-center rightcont">
              <NavDropdown title="CLUBS" id="basic-nav-dropdown" className="mya">
                <NavDropdown.Item href="/NSS">NSS</NavDropdown.Item>
                <NavDropdown.Item href="/EDC">EDC</NavDropdown.Item>
                <NavDropdown.Item href="/IEE">IEEE</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/profile" className="text-decoration-none mya">
                Profile
              </NavLink>

              {/* Logout Link - Using handleLogout */}
              <span
                className="text-decoration-none mya"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                LOGOUT
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
