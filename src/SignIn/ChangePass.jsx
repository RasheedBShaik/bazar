import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const ChangePass = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const send = (e) => {
    if (passwordOne !== "") {
      if (passwordOne === passwordTwo && passwordOne !== "") {
        console.log(passwordOne);
        console.log("Okay");
        navigate("/passwordchangedcongrats");
      } else {
        console.log("Not Okay");
        document.getElementById(
          "err",
        ).innerHTML = ` <div style="color:red"> Password mismatched</div>`;
      }
    } else {
      document.getElementById(
        "err",
      ).innerHTML = ` <div style="color:red"> Enter Password </div>`;
    }
  };

  return (
    <div className="container3">
      <div className="greetings">
        <div className="greetingHeading">New Password</div>
        <span>Create your new password, so you can login to your account.</span>
      </div>
      <div className="password" id="password1">
        <div>Password</div>
        <div className="eyeContainer">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            onChange={(e) => setPasswordOne(e.target.value)}
          />
          <img
            className="eye-icon"
            src="images/signin/Password-Outline.png"
            alt=""
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
      </div>
      <div className="password" id="password2">
        <div>Password</div>
        <div className="eyeContainer">
          <input
            className="input"
            type={showPassword2 ? "text" : "password"}
            placeholder="Your password"
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
          <img
            className="eye-icon"
            src="images/signin/Password-Outline.png"
            alt=""
            onClick={() => setShowPassword2((prev) => !prev)}
          />
        </div>
      </div>
      <div id="err"></div>
      <div className="send" onClick={send} style={{ marginTop: "20px" }}>
        Send
      </div>
    </div>
  );
};

export default ChangePass;
