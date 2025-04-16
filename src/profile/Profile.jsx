import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userKey, setUserKey] = useState(null);

  useEffect(() => {
    const storedKey = localStorage.getItem("userKey");
    if (!storedKey) {
      console.error("No user key found in localStorage");
      return;
    }

    setUserKey(storedKey);
    loadUserData(storedKey);
  }, []);

  // Load data from Firebase
  const loadUserData = (key) => {
    const userUrl = `https://bazar-7752a-default-rtdb.firebaseio.com/User/${key}.json`;
    axios
      .get(userUrl)
      .then((response) => {
        const data = response.data;
        if (data) {
          setName(data.name || "");
          setMail(data.email || "");
          setPassword(data.password || "");
        }
      })
      .catch((error) => {
        console.error("Failed to load user data:", error);
      });
  };

  // Save updated data to Firebase
  const handleSaveChanges = () => {
    if (!userKey) {
      alert("User key not found.");
      return;
    }

    const updatedUser = {
      name,
      email: mail,
      password,
    };

    const userUrl = `https://bazar-7752a-default-rtdb.firebaseio.com/User/${userKey}.json`;

    axios
      .patch(userUrl, updatedUser)
      .then(() => {
        console.log("User data updated successfully");
        alert("Changes saved successfully!");
      })
      .catch((error) => {
        console.error("Failed to update user data:", error);
        alert("Failed to save changes");
      });
  };

  return (
    <div className="container3">
      <div className="homeHead">
        <div className="headhome">Profile</div>
      </div>

      <div className="pageContent">
        <div>
          <label>Name</label>
          <br />
          <input
            className="userDetails"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            className="userDetails"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="password">
          <label>Password</label>
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
              src={
                showPassword
                  ? "images/signin/eye 1.png"
                  : "images/signin/eye-off 1.png"
              }
              alt="Toggle Password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <div className="myAccount">My Account</div>

      <button type="submit" className="saveChanges" onClick={handleSaveChanges}>
        Save Changes
      </button>

      <div className="bottomBar">
        <Link to="/home" className="bottomBarItem">
          <div className="bottomBarItemHome">
            <img src={"images/homepage/bottombar/Home-Fill.png"} alt="Home" />
            <div style={{ color: "#A6A6A6" }}>Home</div>
          </div>
        </Link>

        <Link to="/category" className="bottomBarItem">
          <div className="bottombarItemCategory">
            <img
              src={"images/homepage/bottombar/Menu-Fill.png"}
              alt="Category"
            />
            <div style={{ color: "#A6A6A6" }}>Category</div>
          </div>
        </Link>

        <Link to="/cart" className="bottomBarItem">
          <div className="bottombarItemCart">
            <img src={"images/homepage/bottombar/Cart-Fill.png"} alt="Cart" />
            <div style={{ color: "#A6A6A6" }}>Cart</div>
          </div>
        </Link>

        <Link to="/profile" className="bottomBarItem">
          <div className="bottombarItemProfile">
            <img
              src={"images/homepage/bottombar/Profile-Fill2.png"}
              alt="Profile"
            />
            <div style={{ color: "#54408C" }}>Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
