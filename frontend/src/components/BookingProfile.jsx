import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingProfile(props) {
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
      <h1>{workers.name}</h1>
      <h1>{workers.email}</h1>
      <h1>{workers.location}</h1>
      <h1>{workers.phoneNo}</h1>
      <h1>{workers.age}</h1>
      <h1>{workers.gender}</h1>
      <button className="btn btn-danger">Book</button>
    </div>
  );
}

export default BookingProfile;
