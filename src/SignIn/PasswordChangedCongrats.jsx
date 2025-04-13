// next password changed
import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordChangedCongrats = () => {
  const navigate = useNavigate();
  const goToSignIn = () => navigate("/signin");

  return (
    <div>
      {" "}
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
              Password changed successfully, you can login again with a new
              password
            </span>
          </div>
          <div
            style={{ marginTop: "40px" }}
            onClick={goToSignIn}
            className="getStarted">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangedCongrats;
