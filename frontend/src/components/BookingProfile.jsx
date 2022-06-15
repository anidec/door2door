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
      <div class="mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="carda p-4 shadow">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <button class="btna btn-secondary">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height="100"
                width="100"
              />
            </button>
            <div class="name mt-3"> {workers.name}</div> <div class="idd"></div>
            <div class="d-flex flex-column justify-content-center align-items-center gap-2">
              <div class="idd1">{workers.location}</div>{" "}
              <div>
                <i class="fa fa-copy"></i>
              </div>
              <div class=" flex flex-row profiletext ">
                <div>
                  <strong>PhoneNo:</strong> {workers.phoneNo}
                </div>
                <div>
                  <strong>Age:</strong> {workers.age}
                </div>
                <div>
                  <strong>Gender:</strong> {workers.gender}
                </div>
                <div>
                  <strong>Price:</strong> {workers.price}
                </div>
              </div>
            </div>
            <div class="text mt-3 profiletext">
              <center>
                <div>
                  <strong>
                    <u>Reasons for Hiring</u>
                  </strong>
                  <br /> {workers.reasons}
                </div>
              </center>
            </div>{" "}
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <div>
                <i class="fa fa-google" />
                <a href={`mailto:${workers.email}`}></a>
              </div>{" "}
            </div>
          </div>
          {localStorage.setItem("worker_email", workers.email)}
          {state ? (
            <NavLink className="nav-link" to="/time">
              <button className="btn btn-danger pbutton">Book</button>
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BookingProfile;
