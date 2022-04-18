import React, { useContext } from "react";
import "../styles/navbar.css";
import mainLogo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
function Navbar() {
  // const [userName, setuserName] = useState("");
  // const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const RenderMenu = () => {
    if (state) {
      return (
        <>
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
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Log In
                    </NavLink>
                  </li> */}
                  <button type="button" className="btn getstarted btn-primary">
                    Get Started
                  </button>
                  {/* <h1>{userName}</h1> */}
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
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
                  {/* <h1>{userName}</h1> */}
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  };
  // const displayName = async () => {
  //   try {
  //     const res = await fetch("/get", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     setuserName(data.name);
  //     setShow(true);
  //     // window.location.reload();
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   displayName();
  // }, []);

  return (
    <div>
      <RenderMenu></RenderMenu>
    </div>
  );
}

export default Navbar;
