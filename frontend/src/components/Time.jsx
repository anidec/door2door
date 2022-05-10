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
    console.log(b);
    axios
      .post("/dt", {
        date: ntxt[0],
        time: ntxt[1],
        email: a,
        name: b,
        price: c,
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
      </form>
    </div>
  );
}

export default Time;
