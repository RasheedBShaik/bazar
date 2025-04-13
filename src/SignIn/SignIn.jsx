import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const goBack = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };
  const forgetpass = () => {
    navigate("/forgetpass");
  };
  return (
    <div className="container3">
      <div className="container3Head">
        <img
          style={{ cursor: "pointer" }}
          src="images/signin/back.png"
          alt=""
          onClick={goBack}
        />
        <div className="greetings">
          <div className="greetingHeading">Welcome Back 👋</div>
          <span>Sign in to your account</span>
        </div>
        <br />
      </div>
      <form>
        <div className="email">
          <div>Email</div>
          <input className="input" type="text" placeholder="Your email" />
        </div>
        <div className="password">
          <div>Password</div>
          <div className="eyeContainer">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
            />
            <img
              className="eye-icon"
              src="images/signin/Password-Outline.png"
              alt=""
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
        <div className="forgetPassword" onClick={forgetpass}>
          Forget Password
        </div>
        <div className="login">Login</div>
        <div className="signUp">
          <span>Don’t have an account?</span>
          <span className="signupcolor" onClick={goToSignUp}>
            Sign Up
          </span>
        </div>
        <div className="OrWith">
          <span>Or with</span>
        </div>
        <div className="otherApps">
          <div className="otherAppsContent">
            <img src="images/signin/Google-logo.png" alt="" />
            <div>Sign in with Google</div>
          </div>
          <div className="otherAppsContent">
            <img src="images/signin/Apple-logo.png" alt="" />
            <div>Sign in with Apple</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
