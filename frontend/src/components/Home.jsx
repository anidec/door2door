import React from "react";
import main from "../images/main.png";
import "../styles/home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 home-text">
            <h1>
              Get your home cleaned
              <br /> <span style={{ color: "#42C2FF" }}>just</span> the way you
              like it
            </h1>
            <br />
            <p style={{ fontWeight: "200", fontSize: "1.2rem" }}>
              Over 1 million people use Door2Door for their cleaning needs.
            </p>
            <button className="btn btn-primary book-btn">
              Find a housekeeper now
            </button>
            <br />
            <br />
            <span style={{ textDecoration: "underline", fontWeight: "500" }}>
              <a style={{ cursor: "pointer" }}>
                Are you a housekeeper looking for a clients?
              </a>
            </span>
          </div>
          <div className="col-lg-6">
            <img src={main} className="home-pic"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
