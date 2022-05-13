import React, { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";
import "../styles/profile.css";

function BookingProfile(props) {
  const { state, dispatch } = useContext(UserContext);
  const [workers, setWorkers] = useState([]);

  const a = localStorage.getItem("id");

  console.log(a);

  useEffect(() => {
    axios
      .get(`/get/profile/${a}`)
      .then((resp) => {
        setWorkers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Name</span> : {workers.name}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Email</span> : {workers.email}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Location</span> : {workers.location}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>PhoneNo</span> : {workers.phoneNo}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Age</span> : {workers.age}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Gender</span> : {workers.gender}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Reasons for hiring</span> :{" "}
        {workers.reasons}
      </h1>
      <h1 className="profilehead">
        <span style={{ color: "blue" }}>Price</span>: {workers.price}
      </h1>
      {localStorage.setItem("worker_email", workers.email)}
      {state ? (
        <NavLink className="nav-link" to="/time">
          <button className="btn btn-danger pbutton">Book</button>
        </NavLink>
      ) : null}
    </div>
  );
}

export default BookingProfile;
