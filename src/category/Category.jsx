import React from "react";

import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="container3">
      <div className="homeHead">
        <div className="headhome">Category</div>
        {/* <div>
          <img src="images/homepage/notification.png" alt="" />
        </div> */}
      </div>
      <div className="AllCategories">
        <div className="categoryItem">
          <img src="images/categorypage/Frame (1).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$19.99</div>
        </div>
        <div className="categoryItem">
          <img src="images/categorypage/Frame (2).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$27.12</div>
        </div>
        <div className="categoryItem">
          <img src="images/categorypage/Frame (3).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$27.12</div>
        </div>
        <div className="categoryItem">
          <img src="images/categorypage/Frame (4).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$19.99</div>
        </div>
        <div className="categoryItem">
          <img src="images/categorypage/Frame (5).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$19.99</div>
        </div>
        <div className="categoryItem">
          <img src="images/categorypage/Frame (6).png" alt="" />
          <div className="categoryName">The Da vinci Code</div>
          <div className="CategoryPrice">$19.99</div>
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
        </Link>
      </div>
    </div>
  );
};

export default Category;
