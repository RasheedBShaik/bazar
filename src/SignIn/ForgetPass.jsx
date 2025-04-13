import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");

  const goBack = () => {
    navigate("/signin");
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(""); // Clear error when typing
    }
  };

  const ChangePassword = () => {
    if (mail.trim() === "") {
      setError("Please enter your email.");
    } else {
      navigate("/changepassword");
    }
  };

  return (
    <div className="container3">
      <div className="container3Head">
        <img
          style={{ cursor: "pointer" }}
          src="images/signin/back.png"
          alt="Go back"
          onClick={goBack}
        />
        <div className="greetings">
          <div className="greetingHeading">Reset Password</div>
          <span>
            Please enter your email, we will send a verification code to your
            email.
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="email" id="mail">
            <div>Email</div>
            <input
              className="input"
              type="text"
              value={mail}
              onChange={handleMailChange}
              placeholder="Your email"
            />
          </div>
        </form>

        {error && (
          <div id="validMail" style={{ color: "red", marginTop: "8px" }}>
            {error}
          </div>
        )}

        <div
          className="send"
          onClick={ChangePassword}
          style={{ marginTop: "20px" }}>
          Send
        </div>
        <br />
      </div>
    </div>
  );
};

export default ForgetPass;
