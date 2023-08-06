import React from "react";

const Hero = (props) => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h2>{props.username ? `Welcome - ${props.username}` : "Welcome"}</h2>
      <h1 style={{ fontSize: "50px", color: "orangered" }}>News Hub</h1>
      <h5>THE WEBSITE BUILT WITH THE NEWS API</h5>
      <h5>USING FIREBASE INTEGRATION</h5>
    </div>
  );
};

export default Hero;
