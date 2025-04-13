import React from "react";
import { useNavigate } from "react-router-dom";

const OnBoardingTwo = () => {
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
            src="images/onboarding/two.png"
            alt=""
          />
        </div>
        <div className="OnBoardingHeading">Your Bookish Soulmate Awaits</div>
        <div className="descOnBoarding">
          Let us be your guide to the perfect read. Discover books tailored to
          your tastes for a truly rewarding experience.
        </div>
        <div className="dotone">
          <img src="images/onboarding/dottwo.png" alt="" />
        </div>
        <div className="OnBoardingButtons">
          <div className="continueButton" onClick={GotoSingUp}>
            Get Started
          </div>
          <div className="signinButton" onClick={handleContinue}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingTwo;
