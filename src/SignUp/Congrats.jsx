// import React, { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Congrats = () => {
  const navigate = useNavigate();

  const goToSignIn = () => navigate("/signin");
  return (
    <div>
      <div className="container3">
        <img
          style={{ marginBottom: "40px" }}
          src="images/signup/congrats.png"
          alt=""
        />
        <div
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}>
          Congratulations
        </div>
        <div style={{ marginTop: "8px" }}>
          <span>
            your registration is completed, Click Get Stated to login.
          </span>
        </div>
        <div
          style={{ marginTop: "40px" }}
          onClick={goToSignIn}
          className="getStarted">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Congrats;
