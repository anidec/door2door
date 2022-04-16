import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import login from "../images/login.png";
import Navbar from "./Navbar";
export default function Login() {
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = res.json();
    if (res.status === 401 || !data) {
      window.alert("invalid details");
    } else {
      window.alert("successful");
      navigate("/");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
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
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <input
                      className="mb-4"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter a valid email address"
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
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter password"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="row mb-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-blue text-center"
                      onClick={loginUser}
                    >
                      Login
                    </button>{" "}
                  </div>
                  <div className="row mb-4 px-3">
                    {" "}
                    <small className="font-weight-bold">
                      Don't have an account?{" "}
                      <a className="text-danger ">Register</a>
                    </small>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
