import React from "react";
import { useNavigate } from "react-router-dom";
const OnBoardingThree = () => {
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
            src="images/onboarding/three.png"
            alt=""
          />
        </div>
        <div className="OnBoardingHeading">Start Your Adventure</div>
        <div className="descOnBoarding">
          Ready to embark on a quest for inspiration and knowledge? Your
          adventure begins now. Let's go!
        </div>
        <div className="dotone">
          <img src="images/onboarding/dotthree.png" alt="" />
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

export default OnBoardingThree;
