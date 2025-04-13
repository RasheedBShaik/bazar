import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lengthValid, setLengthValid] = useState(false);
  const [numLettValid, setNumLettValid] = useState(false);
  const [caseValid, setCaseValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const hasNum = /[0-9]/.test(value);
    const hasLetter = /[a-zA-Z]/.test(value);

    setLengthValid(value.length >= 8);
    setNumLettValid(hasNum && hasLetter);
    setCaseValid(/[a-z]/.test(value) || /[A-Z]/.test(value));
  };

  const goBack = () => navigate("/");
  const goToSignIn = () => navigate("/signin");

  const goToCongrats = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill Name and Email.");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (lengthValid && numLettValid && caseValid) {
      const user = { name, email, password: inputValue };

      axios
        .post("https://bazar-7752a-default-rtdb.firebaseio.com/User.json", user)
        .then(() => {
          alert("User data submitted successfully");
          navigate("/signupcongrats");
        })
        .catch((err) => {
          console.error("Submission failed:", err);
          alert("Something went wrong. Please try again.");
        });
    } else {
      alert("Please make sure your password meets all requirements.");
    }
  };

  return (
    <div className="container3">
      <div className="container3Head">
        <img
          style={{ cursor: "pointer" }}
          src="images/signin/back.png"
          alt="back"
          onClick={goBack}
        />
        <div className="greetings">
          <div className="greetingHeading">Sign Up</div>
          <span>Create account and choose favorite menu</span>
        </div>
      </div>

      <form onSubmit={goToCongrats}>
        <div className="name">
          <div>Name</div>
          <input
            className="input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="email">
          <div>Email</div>
          <input
            className="input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <div>Password</div>
          <div className="eyeContainer">
            <input
              className="input pass"
              type={showPassword ? "text" : "password"}
              value={inputValue}
              onChange={handlePasswordChange}
              placeholder="Your password"
              maxLength={20}
            />
            <img
              className="eye-icon"
              src="images/signin/Password-Outline.png"
              alt="toggle password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>

        <div style={{ color: "#A6A6A6" }}>
          <div>
            <img
              src={`images/signup/${lengthValid ? "correct" : "wrong"}.png`}
              alt=""
              style={{ marginRight: "12px", verticalAlign: "middle" }}
            />
            Minimum 8 characters
          </div>
          <div>
            <img
              src={`images/signup/${numLettValid ? "correct" : "wrong"}.png`}
              alt=""
              style={{ marginRight: "12px", verticalAlign: "middle" }}
            />
            At least 1 number (0-9) and 1 letter
          </div>
          <div>
            <img
              src={`images/signup/${caseValid ? "correct" : "wrong"}.png`}
              alt=""
              style={{ marginRight: "12px", verticalAlign: "middle" }}
            />
            At least lowercase or uppercase letter
          </div>
        </div>

        <button style={{ border: "none" }} type="submit" className="register">
          Register
        </button>

        <div className="signUp">
          <span>Have an account? </span>
          <span className="signupcolor" onClick={goToSignIn}>
            Sign In
          </span>
        </div>
      </form>

      <div className="registration">
        By clicking Register, you agree to our
        <div className="termsAndPolicy">Terms and Data Policy.</div>
      </div>
    </div>
  );
};

export default SignUp;
