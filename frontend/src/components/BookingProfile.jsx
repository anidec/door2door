import React, { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";

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

  if (state) {
    return (
      <div>
        <h1>{workers.name}</h1>
        <h1>{workers.email}</h1>
        <h1>{workers.location}</h1>
        <h1>{workers.phoneNo}</h1>
        <h1>{workers.age}</h1>
        <h1>{workers.gender}</h1>
        <h1>{workers.reasons}</h1>
        <h1>{workers.price}</h1>
        <NavLink className="nav-link" to="/donate">
          <button className="btn btn-danger">Book</button>
        </NavLink>
      </div>
    );
  }
}

export default BookingProfile;
