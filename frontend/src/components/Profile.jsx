import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Profile() {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    phoneNo: 0,
  });
  const [check, setCheck] = useState(0);
  const [workerData, setworkerData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    verificationNo: "",
    phoneNo: 0,
    age: 0,
    gender: "",
    reasons: "",
    price: 0,
    recommendation: 0,
  });
  const navigate = useNavigate();
  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setCheck(data.role);

      if (data.role == 1) {
        setuserData(data);
        console.log("user data is below");
        console.log(userData);
      } else setworkerData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };
  const handleWorkerInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setworkerData({ ...workerData, [name]: value });
  };
  useEffect(() => {
    callProfilePage();
  }, []);
  // const deleteItem = async (id) => {
  //   axios.delete("/delete/" + id);
  //   alert("item delete");
  //   console.log(`deleted item with id ${id}`);
  // };
  const updateItem = async (id) => {
    if (check == 1) axios.put("/put/" + id, userData);
    else axios.put("/put/" + id, workerData);
    alert("item updated");
    console.log(`updated item with id ${id}`);
    navigate("/");
  };
  if (check == 1) {
    return (
      <div>
        <form>
          <div className="card2 card border-0 px-4 py-5">
            <div className="row px-3">
              {" "}
              <label className="mb-1">
                <h6 className="mb-0 text-sm">UserName</h6>
              </label>{" "}
              <input
                className="mb-4"
                type="text"
                name="name"
                placeholder="Enter a valid user name"
                value={userData.name}
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
                value={userData.email}
                onChange={handleInputs}
              />
            </div>
            <div className="row px-3">
              {" "}
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Location</h6>
              </label>{" "}
              <input
                className="mb-4"
                type="text"
                name="location"
                placeholder="Enter your location."
                value={userData.location}
                onChange={handleInputs}
              />
            </div>
            <div className="row px-3">
              {" "}
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Phone No.</h6>
              </label>{" "}
              <input
                className="mb-4 no-spin"
                type="Number"
                name="phoneNo"
                placeholder="Enter your phone number."
                value={userData.phoneNo}
                onChange={handleInputs}
              />
            </div>
          </div>
        </form>
        <button
          className="btn btn-danger"
          onClick={() => updateItem(userData._id)}
        >
          Update
        </button>
        {/* <button onClick={() => deleteItem(userData._id)}>delete</button> */}
      </div>
    );
  } else {
    return (
      <div>
        <form>
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
              value={workerData.email}
              onChange={handleWorkerInputs}
            />
          </div>
          <div className="row px-3">
            {" "}
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Location</h6>
            </label>{" "}
            <input
              className="mb-4"
              type="text"
              name="location"
              placeholder="Enter your location."
              value={workerData.location}
              onChange={handleWorkerInputs}
            />
          </div>
          <div className="row px-3">
            {" "}
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Phone No.</h6>
            </label>{" "}
            <input
              className="mb-4"
              type="Number"
              name="phoneNo"
              placeholder="Enter your phone number."
              value={workerData.phoneNo}
              onChange={handleWorkerInputs}
            />
          </div>
          <div className="row px-3">
            {" "}
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Price</h6>
            </label>{" "}
            <input
              className="mb-4"
              type="Number"
              name="price"
              placeholder="Price"
              value={workerData.price}
              onChange={handleWorkerInputs}
            />
          </div>
        </form>
        <button
          className="btn btn-danger"
          onClick={() => updateItem(workerData._id)}
        >
          Update
        </button>
        {/* <button onClick={() => deleteItem(userData._id)}>delete</button> */}
      </div>
    );
  }
}

export default Profile;
