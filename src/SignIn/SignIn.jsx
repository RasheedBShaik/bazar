import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch users data from Firebase
  useEffect(() => {
    axios
      .get("https://bazar-7752a-default-rtdb.firebaseio.com/User.json")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load user data");
        setLoading(false);
      });
  }, []);

  const goBack = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const forgetpass = () => {
    navigate("/forgetpass");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const user = Object.values(data).find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      console.log("User authenticated:", user);
      navigate("/homepage");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && (
            <div style={{ color: "red" }} className="error">
              {error}
            </div>
          )}

          <div className="container3Head">
            <img
              style={{ cursor: "pointer" }}
              src="images/signin/back.png"
              alt="Back"
              onClick={goBack}
            />
            <div className="greetings">
              <div className="greetingHeading">Welcome Back 👋</div>
              <span>Sign in to your account</span>
            </div>
            <br />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="email">
              <div>Email</div>
              <input
                className="input"
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <div>Password</div>
              <div className="eyeContainer">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="eye-icon"
                  src="images/signin/Password-Outline.png"
                  alt="Toggle Password Visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </div>
            <div className="forgetPassword" onClick={forgetpass}>
              Forget Password
            </div>
            <button style={{ border: "none" }} type="submit" className="login">
              Login
            </button>
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
                <img src="images/signin/Google-logo.png" alt="Google Logo" />
                <div>Sign in with Google</div>
              </div>
              <div className="otherAppsContent">
                <img src="images/signin/Apple-logo.png" alt="Apple Logo" />
                <div>Sign in with Apple</div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignIn;
