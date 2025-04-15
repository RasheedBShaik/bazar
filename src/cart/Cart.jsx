import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container3">
      <div className="homeHead">
        <div className="headhome">Cart</div>
      </div>
      <div className="cartImg">
        <img
          style={{ aspectRatio: "1/1", width: "100%", maxWidth: "11.25rem" }}
          src="images/cartpage/Group (2).png"
          alt=""
        />
        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "18px",
          }}>
          There is no products
        </div>
      </div>
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
        <Link to="/cart" className="bottomBarItem">
          <div className="bottomBarItem">
            <div className="bottombarItemCart">
              <img
                src={"images/homepage/bottombar/Cart-Fill2.png"}
                alt="Cart"
              />
              <div
                style={{
                  color: "#54408C",
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
                  color: "#A6A6A6",
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
