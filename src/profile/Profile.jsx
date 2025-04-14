import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container3">
      <div className="bottomBar">
        {/* Home */}
        <Link to="/home" className="bottomBarItem">
          <div className="bottomBarItemHome">
            <img src={"images/homepage/bottombar/Home-Fill.png"} alt="Home" />
            <div
              style={{
                color: "#A6A6A6",
              }}>
              Home
            </div>
          </div>
        </Link>

        {/* Category */}
        <Link to="/category" className="bottomBarItem">
          <div className="bottombarItemCategory">
            <img
              src={"images/homepage/bottombar/Menu-Fill.png"}
              alt="Category"
            />
            <div
              style={{
                color: "#A6A6A6",
              }}>
              Category
            </div>
          </div>
        </Link>

        {/* Cart */}

        <Link to={"/cart"} className="bottomBarItem">
          <div className="bottombarItemCart">
            <img src={"images/homepage/bottombar/Cart-Fill.png"} alt="Cart" />
            <div
              style={{
                color: "#A6A6A6",
              }}>
              Cart
            </div>
          </div>
        </Link>

        {/* Profile */}
        <Link to="/profile" className="bottomBarItem">
          <div className="bottombarItemProfile">
            <img
              src={"images/homepage/bottombar/Profile-Fill2.png"}
              alt="Profile"
            />
            <div
              style={{
                color: "#54408C",
              }}>
              Profile
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
