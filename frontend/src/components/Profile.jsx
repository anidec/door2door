import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [userData, setuserData] = useState("");
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
      console.log(data);
      setuserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    callProfilePage();
  }, []);
  return (
    <div>
      <h1>{userData.name}</h1>
    </div>
  );
}

export default Profile;
