import React from "react";
import Login from "./Login";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Time() {
  const navigate = useNavigate();
  const [dt, setDt] = useState("");
  const txt = dt;
  const ntxt = txt.split("T");
  console.log(ntxt[0]);
  const PostData = async (e) => {
    e.preventDefault();
    const a = localStorage.getItem("user_email");
    const b = localStorage.getItem("name");
    const c = localStorage.getItem("price");
    const d = localStorage.getItem("worker_email");
    console.log(b);
    axios
      .post("/dt", {
        date: ntxt[0],
        time: ntxt[1],
        email: a,
        name: b,
        price: c,
        worker_email: d,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/donate");
  };

  return (
    <div>
      <form method="POST">
        <label for="birthdaytime">Enter the date and time:</label>
        <input
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
          onChange={(e) => {
            setDt(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-danger" onClick={PostData}>
          Submit
        </button>
        <div class="dropdown show" style={{ marginBottom: "10%" }}>
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Choose Service
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">
              AC/Fridge Repairing
            </a>
            <a class="dropdown-item" href="#">
              General Cleaning
            </a>
            <a class="dropdown-item" href="#">
              Wall Washing
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Time;
