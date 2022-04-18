import React, { useEffect, useState } from "react";
import main from "../images/main.png";
import body from "../images/body.png";
import body2 from "../images/body2.png";
import l1 from "../images/l1.png";
import l2 from "../images/l2.png";
import l3 from "../images/l3.png";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  return (
    <div>
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
      <div className="container">
        <hr
          style={{
            border: "80px blue red",
            color: "darkblue",
            borderRadius: "20px",
            width: "65px",
            margin: "auto auto",
            height: "8px",
          }}
        />
        <br />
        <h2 className="head">
          We're here for you at every step of the process
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={body}
              style={{ width: "100%", height: "90%", paddingTop: "10%" }}
              className="home-pic"
            ></img>
          </div>
          <div className="col-lg-6 home-text">
            <ul className="list">
              <li>
                <h3>
                  <span style={{ fontSize: "1.4rem" }}>1.</span> &nbsp;Tell us
                  your needs
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  Help us understand what you're looking for by answering a few
                  simple questions.
                </p>
              </li>
              <li>
                <h3>
                  <span style={{ fontSize: "1.4rem" }}>2.</span> &nbsp;Browse
                  your top matches
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  Compare housekeepers and prices near you, then talk to the
                  ones you like.
                </p>
              </li>
              <li>
                <h3>
                  <span style={{ fontSize: "1.4rem" }}>3.</span> &nbsp;Hire the
                  best housekeeper
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  Schedule a time with the housekeeper of your choice and you're
                  good to go. It's that easy.
                </p>
              </li>
              <li>
                <button className="btn btn-primary book-btn">
                  Find a housekeeper now
                </button>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <h2 className="head">
          The <i>#</i>1 way to hire a professional housekeeper
        </h2>
        <div className="row">
          <div className="col-lg-7 home-text">
            <ul className="list">
              <li>
                <h3>
                  <img src={l1} /> &nbsp;Cleaners near you
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  Your perfect cleaner is on Door2Door.com. Thousands of
                  qualified cleaners across North America join every day. We've
                  got you covered.
                </p>
                <hr />
              </li>
              <li>
                <h3>
                  <img src={l2} /> &nbsp;Hire on your own terms
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  Choose a cleaner that fits your budget. Door2Door.com has
                  individuals at every budget - from new cleaners that are just
                  getting started, to professionals that have been offering
                  their services for decades.
                </p>
                <hr />
              </li>
              <li>
                <h3>
                  <img src={l3} /> &nbsp;Personalized services
                </h3>
                <p style={{ fontWeight: "200", fontSize: "1rem" }}>
                  With over 10,000 cleaners to choose from, you are sure to find
                  a provider that meets your needs. Door2Door.com has been
                  helping people find their perfect cleaner for 10 years.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <br />
            <br />
            <img
              src={body2}
              style={{ width: "150%", height: "70%", paddingTop: "30%" }}
              className="home-pic"
            ></img>
          </div>
        </div>
      </div>
      <div className="body-back">
        <h1 className="body-last">
          Get your home cleaned <span style={{ color: "blue" }}>just</span> the{" "}
          <br /> way you like it
        </h1>
        <br />
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary book-btn">
            Find a housekeeper now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
