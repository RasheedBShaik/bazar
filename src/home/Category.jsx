import React from "react";
import { Link, useLocation } from "react-router-dom";
const Category = () => {
  const location = useLocation();
  return (
    <div>
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
              src={"images/homepage/bottombar/Menu-Fill2.png"}
              alt="Category"
            />
            <div
              style={{
                color: "#54408C",
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
                color: location.pathname === "cart" ? "" : "#A6A6A6",
              }}>
              Cart
            </div>
          </div>
        </Link>

        {/* Profile */}
        <Link to="/profile" className="bottomBarItem">
          <div className="bottombarItemProfile">
            <img
              src={"images/homepage/bottombar/Profile-Fill.png"}
              alt="Profile"
            />
            <div
              style={{
                color: location.pathname === "profile" ? "" : "#A6A6A6",
              }}>
              Profile
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
