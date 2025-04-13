import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const OnBoardingOne = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/signin");
  };
  const GotoSingUp = () => {
    navigate("signup");
  };
  return (
    <div className="container2">
      <div className="content">
        <div className="skip" onClick={handleContinue}>
          skip
        </div>
        <div className="onBoardingImageContainer">
          <img
            className="onBoardingImage"
            src="images/onboarding/one.png"
            alt=""
          />
        </div>
        <div className="OnBoardingHeading">
          Now reading books will be easier
        </div>
        <div className="descOnBoarding">
          Discover new worlds, join a vibrant reading community. Start your
          reading adventure effortlessly with us.
        </div>
        <div className="dotone">
          <img src="images/onboarding/dotone.png" alt="" />
        </div>
        <div className="OnBoardingButtons">
          <div className="continueButton" onClick={GotoSingUp}>
            Continue
          </div>
          <div className="signinButton" onClick={handleContinue}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingOne;
