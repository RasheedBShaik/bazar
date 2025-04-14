import React from "react";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
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
        <Link to="/Category" className="bottomBarItem">
          <div className="bottombarItemCategory">
            <img
              src={
                // active === "category"
                // ? "images/homepage/bottombar/Menu-Fill2.png"
                "images/homepage/bottombar/Menu-Fill.png"
              }
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
        <Link to="/cart" className="bottomBarItem">
          <div className="bottomBarItem">
            <div className="bottombarItemCart">
              <img
                src={"images/homepage/bottombar/Cart-Fill2.png"}
                alt="Cart"
              />
              <div
                style={{
                  color: location.pathname === "cart" ? "" : "#54408C",
                }}>
                Cart
              </div>
            </div>
          </div>
        </Link>

        {/* Profile */}
        <Link to="/profile" className="bottomBarItem">
          <div className="bottomBarItem">
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
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
