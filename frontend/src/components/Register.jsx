import React, { useState } from "react";
import "../styles/login.css";
import logo from "../images/logo.png";
import login from "../images/login.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 401 || !data) {
      window.alert("invalid registration");
    } else {
      window.alert("successful registration");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img src={login} className="image" />{" "}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form method="POST">
                <div className="card2 card border-0 px-4 py-5">
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">UserName</h6>
                    </label>{" "}
                    <input
                      className="mb-4"
                      type="text"
                      name="username"
                      placeholder="Enter a valid user name"
                      value={user.username}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <input
                      className="mb-4"
                      type="text"
                      name="email"
                      placeholder="Enter a valid email address"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>{" "}
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="row mb-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-blue text-center"
                      onClick={PostData}
                    >
                      Register
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
