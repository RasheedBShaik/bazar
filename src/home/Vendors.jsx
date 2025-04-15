import React from "react";
import { useNavigate } from "react-router-dom";

const Vendors = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  return (
    <div className="container3">
      <div className="homeHead">
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="images/signin/back.png"
            alt="Back"
            onClick={goBack}
          />
        </div>
        <div className="headhome">Vendors</div>
        <div>
          <img src="images/homepage/notification.png" alt="" />
        </div>
      </div>

      <div className="pageHead">
        <div className="pageName">Our Vendors</div>
        <div className="pageHeading">vendors</div>
      </div>
      <div className="AllVendors">
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor1.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor2.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>

        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor3.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>

        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor4.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>

        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor1.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>

        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor1.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor2.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor3.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>

        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor3.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor1.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor2.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
        <div className="vendorDetails">
          <img
            className="vendorImage"
            src="images/homepage/vendors/vendor3.png"
            alt=""
          />
          <div className="vendorName">WattPad</div>
          <div className="reviewStars">stars</div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
