import React from "react";
import "../styles/navbar.css";
import mainLogo from "../images/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navsize shadow p-3 mb-5 bg-white rounded">
        <div className="container-fluid nc">
          <a className="navbar-brand" href="#">
            <img className="image1" src={mainLogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item">
                {/* join */}
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                {/* join */}
                <NavLink className="nav-link" to="/search">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/registerWorker">
                  Job in
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Log In
                </NavLink>
              </li>
              <button type="button" className="btn getstarted btn-primary">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
