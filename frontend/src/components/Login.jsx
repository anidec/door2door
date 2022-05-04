import React, { useContext, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import login from "../images/login.png";
import Navbar from "./Navbar";
import { UserContext } from "../App";
export default function Login() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 401 || res.status === 400 || !data) {
      window.alert("invalid details");
    } else {
      dispatch({ type: "USER", payload: true });
      console.log("state is this:", state);

      window.alert("successful");
      navigate("/");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={(e) => {
                        setRole(0);
                      }}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Are you a housekeeper
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onClick={(e) => {
                        setRole(1);
                      }}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                      Are you a client
                    </label>
                  </div>
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
